import type { FC } from 'react';

import type { CustomLinkProps } from 'shared/types';

import styles from './CustomLink.module.scss';

export const CustomLink: FC<CustomLinkProps> = ({ href, title }) => {
  return (
    <a className={styles.link} href={href} rel='noopener noreferrer' target='_blank'>
      {title}
    </a>
  );
};
