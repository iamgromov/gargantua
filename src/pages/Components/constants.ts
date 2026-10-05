import { type ComponentType } from 'react';

import {
  BodyLargeMedium,
  BodyLargeRegular,
  BodyLargeSemibold,
  BodyStandardMedium,
  BodyStandardRegular,
  BodyStandardSemibold,
  BodyXLargeMedium,
  BodyXLargeRegular,
  BodyXLargeSemibold,
  HeadingLarge,
  HeadingSmall,
  HeadingStandard,
  LabelLargeMedium,
  LabelLargeRegular,
  LabelLargeSemibold,
  LabelSmallMedium,
  LabelSmallRegular,
  LabelSmallSemibold,
  LabelStandardMedium,
  LabelStandardRegular,
  LabelStandardSemibold,
  SpinnerSize,
  type TypographyProps
} from '@/shared/ui';
import { Intent, Size } from '@/shared/ui/Button';

export const BUTTON_SIZES: Array<{ value: Size; label: string }> = [
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
  { value: Intent.Ghost, label: 'Ghost' }
];

export const ICON_BUTTON_SIZES: Array<{ value: Size; label: string }> = [
  { value: Size.Small, label: 'Small' },
  { value: Size.Medium, label: 'Medium' },
  { value: Size.Large, label: 'Large' }
];

export const ICON_BUTTON_VARIANTS: Array<{ value: Intent; label: string }> = [
  { value: Intent.Primary, label: 'Primary' },
  { value: Intent.Secondary, label: 'Secondary' },
  { value: Intent.Outline, label: 'Outline' },
  { value: Intent.Danger, label: 'Danger' },
  { value: Intent.Success, label: 'Success' },
  { value: Intent.Ghost, label: 'Ghost' }
];

export const SPINNERS_SIZES: Array<{ value: SpinnerSize; label: string }> = [
  { value: SpinnerSize.Large, label: 'Large' },
  { value: SpinnerSize.Medium, label: 'Medium' },
  { value: SpinnerSize.Small, label: 'Small' }
];

export const TYPOGRAPHY_SAMPLES: Array<{ label: string; Component: ComponentType<TypographyProps> }> = [
  { label: 'Heading Large', Component: HeadingLarge },
  { label: 'Heading Standard', Component: HeadingStandard },
  { label: 'Heading Small', Component: HeadingSmall },
  { label: 'Label Large Semibold', Component: LabelLargeSemibold },
  { label: 'Label Large Medium', Component: LabelLargeMedium },
  { label: 'Label Large Regular', Component: LabelLargeRegular },
  { label: 'Label Standard Semibold', Component: LabelStandardSemibold },
  { label: 'Label Standard Medium', Component: LabelStandardMedium },
  { label: 'Label Standard Regular', Component: LabelStandardRegular },
  { label: 'Label Small Semibold', Component: LabelSmallSemibold },
  { label: 'Label Small Medium', Component: LabelSmallMedium },
  { label: 'Label Small Regular', Component: LabelSmallRegular },
  { label: 'Body XLarge Semibold', Component: BodyXLargeSemibold },
  { label: 'Body XLarge Medium', Component: BodyXLargeMedium },
  { label: 'Body XLarge Regular', Component: BodyXLargeRegular },
  { label: 'Body Large Semibold', Component: BodyLargeSemibold },
  { label: 'Body Large Medium', Component: BodyLargeMedium },
  { label: 'Body Large Regular', Component: BodyLargeRegular },
  { label: 'Body Standard Semibold', Component: BodyStandardSemibold },
  { label: 'Body Standard Medium', Component: BodyStandardMedium },
  { label: 'Body Standard Regular', Component: BodyStandardRegular }
];
