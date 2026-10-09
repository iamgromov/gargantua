import { type FC, useCallback, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { Close } from '@/assets/icons';
import { ZIndex } from '@/utils/zIndex';

import { Button, Intent, Size } from '../Button';
import { Overlay } from '../primitives/Overlay';
import { HeadingStandard } from '../Typography';

import { DrawerSide, DrawerTitleAlign, type DrawerProps } from './types';

import styles from './Drawer.module.scss';

/** Боковая выезжающая панель */
export const Drawer: FC<DrawerProps> = ({
  open,
  onClose,
  title,
  titleAlign = DrawerTitleAlign.Left,
  showClose = true,
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

  const hasTitle = Boolean(title);
  const hasContent = Boolean(children);

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
        { hasTitle && (
          <div className={ styles.header }>
            <HeadingStandard
              className={ cn(
                styles.title,
                titleAlign === DrawerTitleAlign.Center ? styles.titleCenter : styles.titleLeft
              ) }
              tag='h2'
              id={ titleId }
            >
              { title }
            </HeadingStandard>
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
        { !hasTitle && (
          <h2 className={ styles.visuallyHidden } id={ titleId }>
            Drawer
          </h2>
        ) }
        { hasContent && (
          <div className={ cn(styles.content, { [styles.contentNoHeader]: !hasTitle }) }>
            { children }
          </div>
        ) }
      </aside>
    </>,
    document.body
  );
};
