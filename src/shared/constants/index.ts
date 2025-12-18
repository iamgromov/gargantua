import type { FunctionComponent } from 'react';

import type {
  ButtonSize,
  ButtonVariant,
  FooterLink,
  Links,
  TypographyVariant,
} from '@/shared/types';

import { ReactLogo, ReduxLogo, JSLogo, CSSLogo, HTMLLogo } from '@/assets/icons';

export const CURRENT_YEAR = new Date().getFullYear();

export const BUTTON_SIZES: Array<{ value: ButtonSize; label: string }> = [
  { value: 'extra-large', label: 'Extra large' },
  { value: 'large', label: 'Large' },
  { value: 'medium', label: 'Medium' },
  { value: 'small', label: 'Small' },
];
export const BUTTON_VARIANTS: Array<{ value: ButtonVariant; label: string }> = [
  { value: 'primary', label: 'Primary' },
  { value: 'secondary', label: 'Secondary' },
  { value: 'outline', label: 'Outline' },
  { value: 'danger', label: 'Danger' },
  { value: 'success', label: 'Success' },
  { value: 'ghost', label: 'Ghost' },
  { value: 'link', label: 'Link' },
];

export const LINKS: Links = {
  REPO: 'https://github.com/iamgromov/gargantua',
  STUB: 'https://www.youtube.com/watch?v=K5zP7eQltDE',
  TELEGRAM: 'https://t.me/iamgromov',
};

export const FOOTER_LINKS: FooterLink[] = [
  {
    href: LINKS.REPO,
    title: 'GitHub Repo',
  },
  {
    href: LINKS.TELEGRAM,
    title: `@iamgromov / ${CURRENT_YEAR}`,
  },
  {
    href: '',
    title: '',
  },
  {
    href: LINKS.STUB,
    title: 'Created with:',
  },
];

export const LOGOS: Array<{ id: number; value: FunctionComponent }> = [
  { id: 1, value: ReactLogo },
  { id: 2, value: ReduxLogo },
  { id: 3, value: JSLogo },
  { id: 4, value: CSSLogo },
  { id: 5, value: HTMLLogo },
];

export const TYPOGRAPHY_VARIANTS: TypographyVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
