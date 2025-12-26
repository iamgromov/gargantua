import { forwardRef } from 'react';
import cn from 'classnames';

import type { SpinnerProps } from '@/shared/types';

import styles from './Spinner.module.scss';

/** Spinner component for loading states
 * @param size - spinner size variant
 * @param color - spinner color variant
 * @param className - additional CSS classes
 * @param style - custom styles
 * @returns {JSX.Element}
 */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const {
    size = 'medium',
    color = 'primary',
    className,
    style,
    fullHeight = false,
    ...restProps
  } = props;

  const spinnerClass = cn(styles.spinner, styles[size], styles[color], className);

  return (
    <div className={cn({ [styles.wrapper]: fullHeight })}>
      <div ref={ref} className={spinnerClass} style={style} {...restProps} />
    </div>
  );
});

Spinner.displayName = 'Spinner';
