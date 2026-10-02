import { forwardRef } from 'react';
import cn from 'classnames';

import { type LinkProps } from './types';

import styles from './Link.module.scss';

/** Внешняя ссылка, открывающаяся в новой вкладке */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { href, title, className, children, ...restProps } = props;

  const linkClassName = cn(styles.link, className);

  return (
    <a
      href={ href }
      ref={ ref }
      rel='noopener noreferrer'
      target='_blank'
      className={ linkClassName }
      { ...restProps }
    >
      { children ?? title }
    </a>
  );
});
