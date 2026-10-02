import { forwardRef } from 'react';
import cn from 'classnames';

import { SpinnerColor, SpinnerSize, type SpinnerProps } from './types';

import styles from './Spinner.module.scss';

/** Индикатор загрузки с настраиваемыми размером и цветом */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const {
    size = SpinnerSize.Medium,
    color = SpinnerColor.Primary,
    className,
    style,
    fullHeight = false,
    ...restProps
  } = props;

  const spinnerClass = cn(styles.spinner, styles[size], styles[color], className);

  return (
    <div className={ cn({ [styles.wrapper]: fullHeight }) }>
      <div
        ref={ ref }
        className={ spinnerClass }
        style={ style }
        { ...restProps }
      />
    </div>
  );
});
