import { type FC, useCallback, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { ZIndex } from '@/utils/zIndex';

import { Overlay } from '../primitives/Overlay';

import { DrawerSide, type DrawerProps } from './types';

import styles from './Drawer.module.scss';

/** Боковая выезжающая панель */
export const Drawer: FC<DrawerProps> = ({
  open,
  onClose,
  children,
  side = DrawerSide.Right,
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

  // Блокировка прокрутки страницы под панелью
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
      <aside
        className={ cn(styles.drawer, styles[side], className) }
        style={ { ...style, zIndex: ZIndex.BottomSheet } }
        role='dialog'
        aria-modal='true'
        aria-labelledby={ titleId }
      >
        <h2 className={ styles.visuallyHidden } id={ titleId }>
          Drawer
        </h2>
        { children }
      </aside>
    </>,
    document.body
  );
};
