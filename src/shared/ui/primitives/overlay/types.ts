import type { CSSProperties } from 'react';

export interface OverlayProps {
  /** Вызывается при клике по подложке. */
  onClick?: () => void;
  /** Дополнительный класс. */
  className?: string;
  /** Пользовательские стили (например, z-index). */
  style?: CSSProperties;
}
