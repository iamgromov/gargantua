/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  /** Переопределение базового URL API (по умолчанию — JSONPLACEHOLDER_API_URL) */
  readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.svg?react' {
  import { type FC, type SVGProps } from 'react';
  const SVG: FC<SVGProps<SVGSVGElement>>;
  export default SVG;
}
