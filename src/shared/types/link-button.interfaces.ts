import type { ComponentProps } from 'react';

interface LinkProps {
  href: string;
  title: string;
}

export type LinkButtonProps = ComponentProps<'a'> & LinkProps;
