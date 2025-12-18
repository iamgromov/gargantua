import type { CSSProperties, ChangeEvent } from 'react';

export type SelectVariant = 'default' | 'filled' | 'outline';
export type SelectSize = 'small' | 'medium' | 'large';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string | number;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  error?: string;
  variant?: SelectVariant;
  size?: SelectSize;
  width?: 'auto' | 'full';
  className?: string;
  style?: CSSProperties;
  onChange?: (_event: ChangeEvent<HTMLSelectElement>) => void;
}
