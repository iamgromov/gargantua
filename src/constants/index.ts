import type { FunctionComponent } from 'react';

import type { FooterLink, Links, SpinnerSize, TypographyVariant } from '@/shared/types';

import { ReactLogo, ReduxLogo, JSLogo, CSSLogo, HTMLLogo } from '@/assets/icons';

import { Intent, Size } from '../shared/ui/Button';

export const CURRENT_YEAR = new Date().getFullYear();

export const BUTTON_SIZES: Array<{ value: Size; label: string }> = [
  { value: Size.ExtraLarge, label: 'Extra large' },
  { value: Size.Large, label: 'Large' },
  { value: Size.Medium, label: 'Medium' },
  { value: Size.Small, label: 'Small' },
];
export const BUTTON_VARIANTS: Array<{ value: Intent; label: string }> = [
  { value: Intent.Primary, label: 'Primary' },
  { value: Intent.Secondary, label: 'Secondary' },
  { value: Intent.Outline, label: 'Outline' },
  { value: Intent.Danger, label: 'Danger' },
  { value: Intent.Success, label: 'Success' },
  { value: Intent.Ghost, label: 'Ghost' },
  { value: Intent.Link, label: 'Link' },
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

export const SPINNERS_SIZES: Array<{ value: SpinnerSize; label: string }> = [
  { value: 'large', label: 'Large' },
  { value: 'medium', label: 'Medium' },
  { value: 'small', label: 'Small' },
];

export const TYPOGRAPHY_VARIANTS: TypographyVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
