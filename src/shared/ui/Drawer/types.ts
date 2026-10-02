import type { CSSProperties, ReactNode } from 'react';

export type DrawerSide = 'left' | 'right';

export interface DrawerProps {
  /** Управляет видимостью панели. */
  open: boolean;
  /** Вызывается при закрытии (клик по подложке или Escape). */
  onClose: () => void;
  /** Произвольный контент внутри панели. */
  children?: ReactNode;
  /** Сторона, с которой выезжает панель. */
  side?: DrawerSide;
  /** Закрывать ли при клике по подложке. */
  closeOnBackdrop?: boolean;
  /** Закрывать ли по нажатию Escape. */
  closeOnEscape?: boolean;
  /** Дополнительный класс для панели. */
  className?: string;
  /** Дополнительные стили для панели. */
  style?: CSSProperties;
}
