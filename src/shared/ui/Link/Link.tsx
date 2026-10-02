import { type Ref, forwardRef } from 'react';
import cn from 'classnames';

import { type LinkProps } from './types';

import styles from './Link.module.scss';

/** Компонент ссылки
 * @param href - внешний URL
 * @param title - текст ссылки
 * @param className - дополнительный класс
 * @returns {JSX.Element}
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { href, title, className, children, ...restProps } = props;

  const linkClassName = cn(styles.link, className);

  return (
    <a
      href={ href }
      ref={ ref as Ref<HTMLAnchorElement> }
      rel='noopener noreferrer'
      target='_blank'
      className={ linkClassName }
      { ...restProps }
    >
      { children ?? title }
    </a>
  );
});
