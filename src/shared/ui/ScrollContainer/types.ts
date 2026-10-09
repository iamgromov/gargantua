import type { HTMLAttributes, ReactNode } from 'react';

export enum ScrollContainerGap {
  None = 'none',
  Small = 'small',
  Base = 'base',
  Large = 'large'
}

export interface ScrollContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Содержимое контейнера. */
  children?: ReactNode;
  /** Отступ между элементами. */
  gap?: ScrollContainerGap;
  /** Дополнительный класс. */
  className?: string;
}
