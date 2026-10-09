import { createElement, type FC } from 'react';
import cn from 'classnames';

import { PaperIntent, type PaperProps } from './types';

import styles from './Paper.module.scss';

/** Обёртка основного контента страницы */
export const Paper: FC<PaperProps> = ({
  intent = PaperIntent.Blur,
  tag = 'div',
  noPadding = false,
  children,
  className,
  style
}) =>
  createElement(
    tag,
    {
      className: cn(styles.paper, styles[intent], { [styles.noPadding]: noPadding }, className),
      style
    },
    children
  );
