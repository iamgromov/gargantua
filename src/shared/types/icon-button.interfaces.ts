import type { CSSProperties, MouseEvent, ReactNode } from 'react';

export type IconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'danger'
  | 'success'
  | 'ghost';
export type IconButtonSize = 'small' | 'medium' | 'large';

export interface IconButtonProps {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  icon: ReactNode;
  onClick?: (_event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  to?: string;
  href?: string;
  title?: string;
  'aria-label'?: string;
}
