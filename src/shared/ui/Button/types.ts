import type { CSSProperties, MouseEvent, ReactNode } from 'react';

export enum Intent {
  Primary = 'primary',
  Secondary = 'secondary',
  Outline = 'outline',
  Danger = 'danger',
  Success = 'success',
  Ghost = 'ghost',
  Link = 'link'
}

export enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  ExtraLarge = 'extra-large'
}

export enum Width {
  Auto = 'auto',
  Full = 'full'
}

export interface ButtonProps {
  intent?: Intent;
  size?: Size;
  width?: Width;
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  to?: string;
  href?: string;
  onClick?: (_e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}
