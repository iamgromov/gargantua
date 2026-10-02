import type { ComponentProps } from 'react';

export type LinkProps = ComponentProps<'a'> & {
  /** Внешний URL. */
  href: string;
  /** Текст ссылки, если не передан children. */
  title?: string;
};
