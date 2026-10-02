import { type FC, useCallback, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { ZIndex } from '@/utils/zIndex';

import { Overlay } from '../primitives/Overlay';

import { type BottomSheetProps } from './types';

import styles from './BottomSheet.module.scss';

/** Выезжающая снизу шторка */
export const BottomSheet: FC<BottomSheetProps> = ({
  open,
  onClose,
  children,
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
    <>
      <Overlay
        onClick={ handleBackdropClick }
        style={ { zIndex: ZIndex.BottomSheet } }
      />
      <section
        className={ cn(styles.sheet, className) }
        style={ { ...style, zIndex: ZIndex.BottomSheet } }
        role='dialog'
        aria-modal='true'
        aria-labelledby={ titleId }
      >
        <h2 className={ styles.visuallyHidden } id={ titleId }>
          Bottom sheet
        </h2>
        { children }
      </section>
    </>,
    document.body
  );
};
