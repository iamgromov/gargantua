import type { CSSProperties, MouseEvent, ReactNode } from 'react';

export enum Intent {
  Primary = 'primary',
  Secondary = 'secondary',
  Outline = 'outline',
  Danger = 'danger',
  Success = 'success',
  Ghost = 'ghost'
}

export enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum IconPosition {
  Left = 'left',
  Right = 'right'
}

export enum LoadingType {
  Default = 'default',
  WithTitle = 'with-title'
}

export interface ButtonProps {
  /** Идентификатор (используется для ключей в списках). */
  key?: string;
  /** Вариант оформления кнопки. */
  intent?: Intent;
  /** Размер кнопки. */
  size?: Size;
  /** Растягивать ли кнопку на всю ширину контейнера. */
  fluid?: boolean;
  /** Сделать кнопку круглой (актуально вместе с иконкой). */
  round?: boolean;
  /** Содержимое кнопки. */
  children?: ReactNode;
  /** Иконка кнопки. */
  icon?: ReactNode;
  /** Позиция иконки относительно текста. */
  iconPosition?: IconPosition;
  /** Состояние загрузки. */
  loading?: boolean;
  /** Режим загрузки: спиннер поверх содержимого или рядом с текстом. */
  loadingType?: LoadingType;
  /** Состояние неактивности. */
  disabled?: boolean;
  /** Тип нативной кнопки. */
  type?: 'button' | 'submit' | 'reset';
  /** Всплывающая подсказка. */
  title?: string;
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
  /** Текст для скринридеров. */
  'aria-label'?: string;
}
