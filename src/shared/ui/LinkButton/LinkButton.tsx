import { memo, type FC } from 'react';
import cn from 'classnames';

import type { LinkButtonProps } from '@/shared/types';

import styles from './LinkButton.module.scss';

export const LinkButton: FC<LinkButtonProps> = memo(({ href, title, className, ...restProps }) => {
  const linkClassName = cn(styles.link, className);

  return (
    <a
      href={href}
      rel='noopener noreferrer'
      target='_blank'
      className={linkClassName}
      {...restProps}
    >
      {title}
    </a>
  );
});
