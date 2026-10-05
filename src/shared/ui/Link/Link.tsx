import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import cn from 'classnames';

import { type LinkProps } from './types';

import styles from './Link.module.scss';

/** Ссылка для внешних URL и внутренней навигации */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { to, href, title, underline = true, className, children, ...restProps } = props;

  const linkClassName = cn(styles.link, { [styles.noUnderline]: !underline }, className);
  const content = children ?? title;

  /** Внутренняя ссылка (React Router) */
  if (to && !href) {
    return (
      <RouterLink
        to={ to }
        ref={ ref }
        className={ linkClassName }
        { ...restProps }
      >
        { content }
      </RouterLink>
    );
  }

  /** Внешняя ссылка */
  return (
    <a
      href={ href }
      ref={ ref }
      rel='noopener noreferrer'
      target='_blank'
      className={ linkClassName }
      { ...restProps }
    >
      { content }
    </a>
  );
});
