import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /** HTML-тег, которым рендерится текст. */
  tag?: ElementType;
  /** Содержимое. */
  children?: ReactNode;
}
