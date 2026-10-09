import { type FC, type PointerEvent, useCallback, useId, useRef, useState } from 'react';
import cn from 'classnames';

import { Close } from '@/assets/icons';
import { ZIndex } from '@/utils/zIndex';

import { Button, Intent, Size } from '../../Button';
import { Overlay } from '../../primitives/Overlay';
import { HeadingSmall } from '../../Typography';
import { BottomSheetTitleAlign, type BottomSheetContentProps } from '../types';

import { CLOSE_THRESHOLD, EXPAND_THRESHOLD } from './constants';

import styles from './BottomSheetContent.module.scss';

/** Содержимое шторки: монтируется только при open === true, поэтому состояние свайпа сбрасывается само */
export const BottomSheetContent: FC<BottomSheetContentProps> = ({
  onClose,
  title,
  titleAlign = BottomSheetTitleAlign.Center,
  showHandle = false,
  showClose = true,
  children,
  closeOnBackdrop = true,
  className,
  style
}) => {
  const titleId = useId();
  const startYRef = useRef(0);
  const [expanded, setExpanded] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const handleBackdropClick = useCallback(() => {
    if (closeOnBackdrop) {
      onClose();
    }
  }, [closeOnBackdrop, onClose]);

  // Начало перетаскивания за ручку или за заголовок
  const handleDragStart = useCallback((event: PointerEvent<HTMLElement>) => {
    startYRef.current = event.clientY;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }, []);

  // Смещение шторки за пальцем (только вниз)
  const handleDragMove = useCallback((event: PointerEvent<HTMLElement>) => {
    if (!dragging) {
      return;
    }

    setDragOffset(Math.max(event.clientY - startYRef.current, 0));
  }, [dragging]);

  // Завершение перетаскивания: закрыть или раскрыть на весь экран
  const handleDragEnd = useCallback((event: PointerEvent<HTMLElement>) => {
    if (!dragging) {
      return;
    }

    const offset = event.clientY - startYRef.current;

    setDragging(false);
    setDragOffset(0);

    if (offset > CLOSE_THRESHOLD) {
      onClose();
    } else if (offset < -EXPAND_THRESHOLD) {
      setExpanded(true);
    }
  }, [dragging, onClose]);

  // Жест отменён браузером (системный свайп и т.п.) — просто сбрасываем состояние
  const handleDragCancel = useCallback(() => {
    setDragging(false);
    setDragOffset(0);
  }, []);

  const hasTitle = Boolean(title);
  const hasVisibleTitle = hasTitle && !showHandle;
  const hasHeader = showHandle || hasVisibleTitle;
  const hasContent = Boolean(children);

  return (
    <>
      <Overlay
        onClick={ handleBackdropClick }
        style={ { zIndex: ZIndex.BottomSheet } }
      />
      <section
        className={ cn(
          styles.sheet,
          {
            [styles.expanded]: expanded,
            [styles.dragging]: dragging
          },
          className
        ) }
        style={ {
          ...style,
          zIndex: ZIndex.BottomSheet,
          transform: dragOffset ? `translateY(${dragOffset}px)` : undefined
        } }
        role='dialog'
        aria-modal='true'
        aria-labelledby={ titleId }
      >
        { hasHeader && (
          <div className={ cn(styles.header, { [styles.headerWithHandle]: showHandle }) }>
            { showHandle && (
              <div
                className={ cn(styles.handle, styles.draggable) }
                onPointerDown={ handleDragStart }
                onPointerMove={ handleDragMove }
                onPointerUp={ handleDragEnd }
                onPointerCancel={ handleDragCancel }
                aria-hidden='true'
              />
            ) }
            { hasVisibleTitle && (
              <HeadingSmall
                className={ cn(
                  styles.title,
                  styles.draggable,
                  titleAlign === BottomSheetTitleAlign.Center ? styles.titleCenter : styles.titleLeft
                ) }
                tag='h2'
                id={ titleId }
                onPointerDown={ handleDragStart }
                onPointerMove={ handleDragMove }
                onPointerUp={ handleDragEnd }
                onPointerCancel={ handleDragCancel }
              >
                { title }
              </HeadingSmall>
            ) }
          </div>
        ) }
        { showClose && (
          <Button
            className={ styles.close }
            icon={ <Close /> }
            intent={ Intent.Outline }
            size={ Size.Small }
            round
            aria-label='Закрыть'
            onClick={ onClose }
          />
        ) }
        { !hasVisibleTitle && (
          <h2 className={ styles.visuallyHidden } id={ titleId }>
            { hasTitle ? title : 'Bottom sheet' }
          </h2>
        ) }
        { hasContent && (
          <div className={ cn(styles.content, { [styles.contentNoHeader]: !hasHeader }) }>
            { children }
          </div>
        ) }
      </section>
    </>
  );
};
