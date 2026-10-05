import { type FC } from 'react';

import { useDocumentTitle } from '@/hooks';
import { HeadingLarge } from '@/shared/ui';

import styles from './About.module.scss';

export const About: FC = () => {
  useDocumentTitle('About');

  return (
    <div className={ styles.wrapper }>
      <HeadingLarge>About</HeadingLarge>
    </div>
  );
};
