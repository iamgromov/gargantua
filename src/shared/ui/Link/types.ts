import type { ComponentProps } from 'react';

export type LinkProps = ComponentProps<'a'> & {
  href: string;
  title?: string;
};
