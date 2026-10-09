import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ForwardedRef,
  type MouseEvent,
  type PointerEvent
} from 'react';
import cn from 'classnames';

import { ScrollContainerGap, type ScrollContainerProps } from './types';

import styles from './ScrollContainer.module.scss';

/** Порог в пикселях, после которого начинается перетаскивание мышью */
const DRAG_THRESHOLD = 5;

/** Состояние активного перетаскивания мышью */
interface DragState {
  pointerId: number;
  startX: number;
  scrollLeft: number;
  moved: boolean;
}

/** Начальное (неактивное) состояние перетаскивания */
const INITIAL_DRAG_STATE: DragState = { pointerId: -1, startX: 0, scrollLeft: 0, moved: false };

/** Присваивает узел внешнему и внутреннему ref */
const assignRef = <TElement,>(ref: ForwardedRef<TElement>, node: TElement | null): void => {
  if (typeof ref === 'function') {
    ref(node);
  } else if (ref) {
    ref.current = node;
  }
};

/** Контейнер с горизонтальной прокруткой на любых устройствах */
export const ScrollContainer = forwardRef<HTMLDivElement, ScrollContainerProps>(
  ({ children, gap = ScrollContainerGap.Base, className, onClickCapture, ...rest }, ref) => {
    const elementRef = useRef<HTMLDivElement | null>(null);
    const dragRef = useRef<DragState>(INITIAL_DRAG_STATE);
    const suppressClickRef = useRef(false);
    const [dragging, setDragging] = useState(false);

    // Сохраняет узел одновременно во внутреннем и внешнем ref
    const setElementRef = useCallback(
      (node: HTMLDivElement | null) => {
        elementRef.current = node;
        assignRef(ref, node);
      },
      [ref]
    );

    // Вертикальное колесо мыши прокручивает контейнер по горизонтали
    useEffect(() => {
      const element = elementRef.current;

      if (!element) {
        return undefined;
      }

      const handleWheel = (event: WheelEvent) => {
        if (event.deltaX !== 0 || event.defaultPrevented) {
          return;
        }

        const { scrollLeft, scrollWidth, clientWidth } = element;

        if (scrollWidth <= clientWidth) {
          return;
        }

        const atStart = scrollLeft <= 0;
        const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;

        // На краю отдаём событие странице, чтобы та прокручивалась как обычно
        if ((event.deltaY < 0 && atStart) || (event.deltaY > 0 && atEnd)) {
          return;
        }

        event.preventDefault();
        element.scrollLeft += event.deltaY;
      };

      element.addEventListener('wheel', handleWheel, { passive: false });

      return () => element.removeEventListener('wheel', handleWheel);
    }, []);

    // Начало перетаскивания мышью
    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
      const element = elementRef.current;

      if (event.pointerType !== 'mouse' || event.button !== 0 || !element) {
        return;
      }

      if (element.scrollWidth <= element.clientWidth) {
        return;
      }

      dragRef.current = {
        pointerId: event.pointerId,
        startX: event.clientX,
        scrollLeft: element.scrollLeft,
        moved: false
      };
    };

    // Перетаскивание мышью
    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
      const element = elementRef.current;
      const drag = dragRef.current;

      if (!element || drag.pointerId !== event.pointerId) {
        return;
      }

      const delta = event.clientX - drag.startX;

      if (!drag.moved && Math.abs(delta) < DRAG_THRESHOLD) {
        return;
      }

      if (!drag.moved) {
        drag.moved = true;
        setDragging(true);
        element.setPointerCapture(event.pointerId);
      }

      event.preventDefault();
      element.scrollLeft = drag.scrollLeft - delta;
    };

    // Завершение перетаскивания мышью
    const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
      const element = elementRef.current;
      const drag = dragRef.current;

      if (drag.pointerId !== event.pointerId) {
        return;
      }

      suppressClickRef.current = drag.moved;

      if (element?.hasPointerCapture(event.pointerId)) {
        element.releasePointerCapture(event.pointerId);
      }

      dragRef.current = INITIAL_DRAG_STATE;
      setDragging(false);
    };

    // Гасит клик, которым завершилось перетаскивание
    const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
      onClickCapture?.(event);

      if (suppressClickRef.current) {
        suppressClickRef.current = false;
        event.preventDefault();
        event.stopPropagation();
      }
    };

    return (
      <div
        { ...rest }
        ref={ setElementRef }
        className={ cn(styles.container, styles[gap], { [styles.dragging]: dragging }, className) }
        onClickCapture={ handleClickCapture }
        onPointerDown={ handlePointerDown }
        onPointerMove={ handlePointerMove }
        onPointerUp={ handlePointerEnd }
        onPointerCancel={ handlePointerEnd }
      >
        { children }
      </div>
    );
  }
);
