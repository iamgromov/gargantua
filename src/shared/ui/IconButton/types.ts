import type { CSSProperties, MouseEvent, ReactNode } from 'react';

export enum IconButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Outline = 'outline',
  Danger = 'danger',
  Success = 'success',
  Ghost = 'ghost'
}

export enum IconButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface IconButtonProps {
  /** Иконка кнопки. */
  icon: ReactNode;
  /** Вариант оформления кнопки. */
  variant?: IconButtonVariant;
  /** Размер кнопки. */
  size?: IconButtonSize;
  /** Обработчик клика. */
  onClick?: (_event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
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
  /** Всплывающая подсказка. */
  title?: string;
  /** Текст для скринридеров. */
  'aria-label'?: string;
}
