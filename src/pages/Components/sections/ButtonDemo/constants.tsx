import { type ReactNode } from 'react';

import { Menu } from '@/assets/icons';
import { type SelectOption } from '@/shared/ui';
import { IconPosition, Intent, LoadingType, Size } from '@/shared/ui/Button';

/** Доступные иконки для настройки кнопки */
export enum IconValue {
  None = 'none',
  Menu = 'menu'
}

/** Варианты оформления кнопки */
export const INTENT_OPTIONS: SelectOption[] = [
  { value: Intent.Primary, label: 'Primary' },
  { value: Intent.Secondary, label: 'Secondary' },
  { value: Intent.Outline, label: 'Outline' },
  { value: Intent.Danger, label: 'Danger' },
  { value: Intent.Success, label: 'Success' },
  { value: Intent.Ghost, label: 'Ghost' },
  { value: Intent.Transparent, label: 'Transparent' }
];

/** Размеры кнопки */
export const SIZE_OPTIONS: SelectOption[] = [
  { value: Size.Small, label: 'Small' },
  { value: Size.Medium, label: 'Medium' },
  { value: Size.Large, label: 'Large' }
];

/** Иконки кнопки */
export const ICON_OPTIONS: SelectOption[] = [
  { value: IconValue.None, label: 'Без иконки' },
  { value: IconValue.Menu, label: 'Меню' }
];

/** Позиция иконки относительно текста */
export const ICON_POSITION_OPTIONS: SelectOption[] = [
  { value: IconPosition.Left, label: 'Слева' },
  { value: IconPosition.Right, label: 'Справа' }
];

/** Текст кнопки (пустое значение — кнопка только с иконкой) */
export const LABEL_OPTIONS: SelectOption[] = [
  { value: 'Кнопка', label: 'Кнопка' },
  { value: '', label: 'Без текста' }
];

/** Режимы загрузки */
export const LOADING_TYPE_OPTIONS: SelectOption[] = [
  { value: LoadingType.Default, label: 'Спиннер поверх текста' },
  { value: LoadingType.WithTitle, label: 'Спиннер рядом с текстом' }
];

/** Общие опции для булевых пропсов (loading, disabled, fluid, round) */
export const BOOLEAN_OPTIONS: SelectOption[] = [
  { value: 'true', label: 'Включено' },
  { value: 'false', label: 'Отключено' }
];

/** Соответствие выбранного значения и JSX иконки */
export const ICONS: Record<IconValue, ReactNode> = {
  [IconValue.None]: null,
  [IconValue.Menu]: <Menu />
};
