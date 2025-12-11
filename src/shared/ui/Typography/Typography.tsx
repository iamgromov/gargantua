import type { FC } from 'react';
import cn from 'classnames';

import type { TypographyProps } from '@/shared/types';

import styles from './Typography.module.scss';

export const Typography: FC<TypographyProps> = ({
  variant,
  color,
  children,
  isUppercase,
  isCapitalize,
  isRight,
  isCenter,
  isJustify,
  ...props
}) => {
  return (
    <span
      style={{
        color: color ? `var(--${color})` : 'inherit',
        textTransform: (isUppercase && 'uppercase') || (isCapitalize && 'capitalize') || 'none',
        textAlign:
          (isRight && 'right') || (isCenter && 'center') || (isJustify && 'justify') || 'left',
      }}
      className={cn(styles.root, styles[variant])}
      {...props}
    >
      {children}
    </span>
  );
};
