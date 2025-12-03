/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg?react' {
  import { type FC, type SVGProps } from 'react';
  const SVG: FC<SVGProps<SVGSVGElement>>;
  export default SVG;
}
