import type { CSSProperties, MouseEvent, ReactNode } from 'react';

export enum Intent {
  Primary = 'primary',
  Secondary = 'secondary',
  Outline = 'outline',
  Danger = 'danger',
  Success = 'success',
  Ghost = 'ghost',
  Link = 'link'
}

export enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  ExtraLarge = 'extra-large'
}

export enum Width {
  Auto = 'auto',
  Full = 'full'
}

export interface ButtonProps {
  /** Вариант оформления кнопки. */
  intent?: Intent;
  /** Размер кнопки. */
  size?: Size;
  /** Ширина кнопки. */
  width?: Width;
  /** Содержимое кнопки. */
  children?: ReactNode;
  /** Состояние загрузки. */
  loading?: boolean;
  /** Состояние неактивности. */
  disabled?: boolean;
  /** Дополнительный класс. */
  className?: string;
  /** Дополнительные инлайн-стили. */
  style?: CSSProperties;
  /** Путь внутреннего маршрута (React Router). */
  to?: string;
  /** Внешний URL, открывается в новой вкладке. */
  href?: string;
  /** Обработчик клика. */
  onClick?: (_event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}
