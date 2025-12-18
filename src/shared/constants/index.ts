import type { ButtonSize, ButtonVariant, Links, TypographyVariant } from '@/shared/types';

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

export const TYPOGRAPHY_VARIANTS: TypographyVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
