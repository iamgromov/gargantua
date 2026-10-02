import { IconButtonSize, IconButtonVariant, SpinnerSize, TypographyVariant } from '@/shared/ui';
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
  { value: IconButtonSize.Small, label: 'Small' },
  { value: IconButtonSize.Medium, label: 'Medium' },
  { value: IconButtonSize.Large, label: 'Large' }
];

export const ICON_BUTTON_VARIANTS: Array<{ value: IconButtonVariant; label: string }> = [
  { value: IconButtonVariant.Primary, label: 'Primary' },
  { value: IconButtonVariant.Secondary, label: 'Secondary' },
  { value: IconButtonVariant.Outline, label: 'Outline' },
  { value: IconButtonVariant.Danger, label: 'Danger' },
  { value: IconButtonVariant.Success, label: 'Success' },
  { value: IconButtonVariant.Ghost, label: 'Ghost' }
];

export const SPINNERS_SIZES: Array<{ value: SpinnerSize; label: string }> = [
  { value: SpinnerSize.Large, label: 'Large' },
  { value: SpinnerSize.Medium, label: 'Medium' },
  { value: SpinnerSize.Small, label: 'Small' }
];

export const TYPOGRAPHY_VARIANTS: TypographyVariant[] = [
  TypographyVariant.H1,
  TypographyVariant.H2,
  TypographyVariant.H3,
  TypographyVariant.H4,
  TypographyVariant.H5,
  TypographyVariant.H6
];
