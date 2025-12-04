import type { CSSProperties, MouseEvent, ReactNode } from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'danger'
  | 'success'
  | 'ghost'
  | 'link';
export type ButtonSize = 'small' | 'medium' | 'large' | 'extra-large';
export type ButtonWidth = 'auto' | 'full';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  width?: ButtonWidth;
  children?: ReactNode;
  onClick?: (_e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  to?: string;
  href?: string;
}
