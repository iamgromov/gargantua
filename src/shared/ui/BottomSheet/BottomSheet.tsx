import { type FC, useCallback, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { ZIndex } from '@/utils/zIndex';

import { type BottomSheetProps } from './types';

import styles from './BottomSheet.module.scss';

/** BottomSheet component
 * @param open - управляет видимостью шторки
 * @param onClose - вызывается при закрытии (клик по подложке, Escape)
 * @param children - контент шторки
 * @param backdrop - стиль подложки: затемнение (`dim`) или блюр (`blur`)
 * @param closeOnBackdrop - закрывать ли при клике по подложке
 * @param closeOnEscape - закрывать ли по нажатию Escape
 * @param className - дополнительный класс для панели шторки
 * @param style - дополнительные стили для панели шторки
 * @returns {JSX.Element | null}
 */
export const BottomSheet: FC<BottomSheetProps> = ({
  open,
  onClose,
  children,
  backdrop = 'dim',
  closeOnBackdrop = true,
  closeOnEscape = true,
  className,
  style
}) => {
  const titleId = useId();

  // Закрытие по Escape
  useEffect(() => {
    if (!open || !closeOnEscape) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, closeOnEscape, onClose]);

  // Блокировка прокрутки страницы под шторкой
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const { overflow } = document.body.style;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  const handleBackdropClick = useCallback(() => {
    if (closeOnBackdrop) {
      onClose();
    }
  }, [closeOnBackdrop, onClose]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div
      className={ cn(styles.overlay, styles[backdrop]) }
      style={ { zIndex: ZIndex.BottomSheet } }
    >
      <div
        className={ styles.backdrop }
        onClick={ handleBackdropClick }
        aria-hidden='true'
      />
      <section
        className={ cn(styles.sheet, className) }
        style={ style }
        role='dialog'
        aria-modal='true'
        aria-labelledby={ titleId }
      >
        <h2 className={ styles.visuallyHidden } id={ titleId }>
          Bottom sheet
        </h2>
        { children }
      </section>
    </div>,
    document.body
  );
};
