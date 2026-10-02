import type { ChangeEvent, CSSProperties } from 'react';

export enum SelectVariant {
  Default = 'default',
  Filled = 'filled',
  Outline = 'outline'
}

export enum SelectSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum SelectWidth {
  Auto = 'auto',
  Full = 'full'
}

export interface SelectOption {
  /** Значение варианта. */
  value: string | number;
  /** Подпись варианта. */
  label: string;
  /** Недоступность варианта. */
  disabled?: boolean;
}

export interface SelectProps {
  /** Массив вариантов выбора. */
  options: SelectOption[];
  /** Выбранное значение. */
  value?: string | number;
  /** Текст подсказки пустого варианта. */
  placeholder?: string;
  /** Подпись списка. */
  label?: string;
  /** Состояние неактивности. */
  disabled?: boolean;
  /** Состояние загрузки. */
  loading?: boolean;
  /** Сообщение об ошибке. */
  error?: string;
  /** Вариант оформления. */
  variant?: SelectVariant;
  /** Размер списка. */
  size?: SelectSize;
  /** Ширина списка. */
  width?: SelectWidth;
  /** Дополнительный класс. */
  className?: string;
  /** Дополнительные инлайн-стили. */
  style?: CSSProperties;
  /** Обработчик изменения выбора. */
  onChange?: (_event: ChangeEvent<HTMLSelectElement>) => void;
}
