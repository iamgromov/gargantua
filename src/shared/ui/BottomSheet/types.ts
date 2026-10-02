import type { CSSProperties, ReactNode } from 'react';

export interface BottomSheetProps {
  /** Управляет видимостью компонента. */
  open: boolean;
  /** Вызывается при закрытии (клик по подложке или Escape). */
  onClose: () => void;
  /** Произвольный контент внутри шторки. */
  children?: ReactNode;
  /** Закрывать ли при клике по подложке. */
  closeOnBackdrop?: boolean;
  /** Закрывать ли по нажатию Escape. */
  closeOnEscape?: boolean;
  /** Дополнительный класс для панели шторки. */
  className?: string;
  /** Дополнительные стили для панели шторки. */
  style?: CSSProperties;
}
