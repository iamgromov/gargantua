import { type FC } from 'react';
import cn from 'classnames';

import { TypographyWeight, type TypographyProps } from './types';

import styles from './Typography.module.scss';

/** Текстовый элемент дизайн-системы */
export const Typography: FC<TypographyProps> = ({
  variant,
  weight = TypographyWeight.Black,
  children,
  ...props
}) => {
  return (
    <span className={ cn(styles.typography, styles[variant], styles[weight]) } { ...props }>
      { children }
    </span>
  );
};
