import type { CSSProperties } from 'react';

export enum SpinnerSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum SpinnerColor {
  Primary = 'primary',
  Secondary = 'secondary',
  White = 'white'
}

export interface SpinnerProps {
  /** Размер спиннера. */
  size?: SpinnerSize;
  /** Цвет спиннера. */
  color?: SpinnerColor;
  /** Растягивать ли спиннер по центру родителя. */
  fullHeight?: boolean;
  /** Дополнительный класс. */
  className?: string;
  /** Дополнительные инлайн-стили. */
  style?: CSSProperties;
}
