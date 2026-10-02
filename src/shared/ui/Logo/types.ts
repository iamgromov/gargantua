import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LogoProps extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
  /** Ширина логотипа. */
  width?: number | string;
  /** Высота логотипа. */
  height?: number | string;
}
