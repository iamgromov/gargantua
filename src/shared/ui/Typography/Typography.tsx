import type { FC } from 'react';
import cn from 'classnames';

import type { TypographyProps } from '@/shared/types';

import styles from './Typography.module.scss';

export const Typography: FC<TypographyProps> = ({
  variant,
  weight = 'black',
  children,
  ...props
}) => {
  return (
    <span className={cn(styles.typography, styles[variant], styles[weight])} {...props}>
      {children}
    </span>
  );
};
