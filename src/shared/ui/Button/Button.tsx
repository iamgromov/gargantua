import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;

  variant?: ButtonVariant;
  size?: ButtonSize;

  title?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  to,
  href,
  onClick,

  variant = 'primary',
  size = 'medium',

  title,
  leftIcon,
  rightIcon,
}) => {
  const buttonClass = cn(styles.button, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.outline]: variant === 'outline',
    [styles.danger]: variant === 'danger',
    [styles.success]: variant === 'success',

    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large',
  });

  const content = (
    <>
      {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
      {title && <span className={styles.title}>{title}</span>}
      {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClass} rel='noopener noreferrer' target='_blank'>
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {content}
    </button>
  );
};
