import type {
  IconButtonSize,
  IconButtonVariant,
  SpinnerSize,
  TypographyVariant
} from '@/shared/types';
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

export const ICON_BUTTON_SIZES: Array<{ value: IconButtonSize; label: string }> = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' }
];

export const ICON_BUTTON_VARIANTS: Array<{ value: IconButtonVariant; label: string }> = [
  { value: 'primary', label: 'Primary' },
  { value: 'secondary', label: 'Secondary' },
  { value: 'outline', label: 'Outline' },
  { value: 'danger', label: 'Danger' },
  { value: 'success', label: 'Success' },
  { value: 'ghost', label: 'Ghost' }
];

export const SPINNERS_SIZES: Array<{ value: SpinnerSize; label: string }> = [
  { value: 'large', label: 'Large' },
  { value: 'medium', label: 'Medium' },
  { value: 'small', label: 'Small' }
];

export const TYPOGRAPHY_VARIANTS: TypographyVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
