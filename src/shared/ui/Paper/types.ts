import type { CSSProperties, ElementType, ReactNode } from 'react';

export enum PaperIntent {
  Primary = 'primary',
  Blur = 'blur',
  Transparent = 'transparent'
}

export interface PaperProps {
  /** Вариант оформления фона. */
  intent?: PaperIntent;
  /** HTML-тег или компонент для корневого элемента. */
  tag?: ElementType;
  /** Убрать внутренние отступы. */
  noPadding?: boolean;
  /** Содержимое. */
  children?: ReactNode;
  /** Дополнительный класс. */
  className?: string;
  /** Дополнительные инлайн-стили. */
  style?: CSSProperties;
}
