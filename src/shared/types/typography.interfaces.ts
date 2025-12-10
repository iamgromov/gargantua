import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type TypographyVariant = 't12' | 't14' | 't16' | 't18b' | 't24b' | 't30b';

export interface TypographyProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> {
  variant: TypographyVariant;
  children: ReactNode;
  isUppercase?: boolean;
  isCapitalize?: boolean;
  isCenter?: boolean;
  isRight?: boolean;
  isJustify?: boolean;
  isBold?: boolean;
}
