import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ThemeSwitcherProps extends DetailedHTMLProps<
  HTMLAttributes<SVGSVGElement>,
  SVGSVGElement
> {
  /** Ширина переключателя. */
  width?: number | string;
  /** Высота переключателя. */
  height?: number | string;
}
