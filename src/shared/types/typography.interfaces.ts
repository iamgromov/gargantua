import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TypographyWeight = 'regular' | 'medium' | 'bold' | 'black';

export interface TypographyProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> {
  variant: TypographyVariant;
  weight?: TypographyWeight;
  children: ReactNode;
}
