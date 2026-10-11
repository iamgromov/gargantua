import { type FC, type SVGProps } from 'react';

import { ICON_CATEGORIES } from '@/assets/icons';
import { type SelectOption } from '@/shared/ui';

/** Иконка из реестра — svg-компонент, сгенерированный vite-plugin-svgr */
export type IconComponent = FC<SVGProps<SVGSVGElement>>;

/** Категории иконок — ключи реестра `ICON_CATEGORIES` (папки в `@/assets/icons`) */
export type IconCategory = keyof typeof ICON_CATEGORIES;

/** Категория, открытая по умолчанию */
export const DEFAULT_CATEGORY: IconCategory = 'arrows';

/** Цвет иконки — токены в стиле вариантов кнопки */
export enum IconColor {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger'
}

/** Опции выбора категории иконок */
export const CATEGORY_OPTIONS: SelectOption[] = Object.keys(ICON_CATEGORIES).map((category) => ({
  value: category,
  label: category.charAt(0).toUpperCase() + category.slice(1)
}));

/** Опции выбора цвета иконки */
export const COLOR_OPTIONS: SelectOption[] = [
  { value: IconColor.Primary, label: 'Primary' },
  { value: IconColor.Secondary, label: 'Secondary' },
  { value: IconColor.Success, label: 'Success' },
  { value: IconColor.Danger, label: 'Danger' }
];

/** Соответствие выбранного цвета и CSS-токена */
export const COLOR_TOKENS: Record<IconColor, string> = {
  [IconColor.Primary]: 'var(--color-primary)',
  [IconColor.Secondary]: 'var(--color-secondary)',
  [IconColor.Success]: 'var(--color-success)',
  [IconColor.Danger]: 'var(--color-danger)'
};

/** Иконки категории в виде пар «имя — компонент» */
export const getCategoryIcons = (category: IconCategory): [string, IconComponent][] =>
  Object.entries(ICON_CATEGORIES[category] as Record<string, IconComponent>);
