import { type FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { BottomSheetContent } from './BottomSheetContent/BottomSheetContent';
import { type BottomSheetProps } from './types';

/** Выезжающая снизу шторка */
export const BottomSheet: FC<BottomSheetProps> = ({
  open,
  onClose,
  closeOnEscape = true,
  ...contentProps
}) => {
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

  if (!open) {
    return null;
  }

  return createPortal(
    <BottomSheetContent onClose={ onClose } { ...contentProps } />,
    document.body
  );
};
