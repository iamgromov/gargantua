import type { SpinnerSize, TypographyVariant } from '@/shared/types';
import { Intent, Size } from '@/shared/ui/Button';

export const BUTTON_SIZES: Array<{ value: Size; label: string }> = [
  { value: Size.ExtraLarge, label: 'Extra large' },
  { value: Size.Large, label: 'Large' },
  { value: Size.Medium, label: 'Medium' },
  { value: Size.Small, label: 'Small' }
];
export const BUTTON_VARIANTS: Array<{ value: Intent; label: string }> = [
  { value: Intent.Primary, label: 'Primary' },
  { value: Intent.Secondary, label: 'Secondary' },
  { value: Intent.Outline, label: 'Outline' },
  { value: Intent.Danger, label: 'Danger' },
  { value: Intent.Success, label: 'Success' },
  { value: Intent.Ghost, label: 'Ghost' },
  { value: Intent.Link, label: 'Link' }
];

export const SPINNERS_SIZES: Array<{ value: SpinnerSize; label: string }> = [
  { value: 'large', label: 'Large' },
  { value: 'medium', label: 'Medium' },
  { value: 'small', label: 'Small' }
];

export const TYPOGRAPHY_VARIANTS: TypographyVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
