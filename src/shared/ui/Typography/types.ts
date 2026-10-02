import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export enum TypographyVariant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum TypographyWeight {
  Regular = 'regular',
  Medium = 'medium',
  Bold = 'bold',
  Black = 'black'
}

export interface TypographyProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> {
  /** Вариант типографики. */
  variant: TypographyVariant;
  /** Насыщенность шрифта. */
  weight?: TypographyWeight;
  /** Содержимое. */
  children: ReactNode;
}
