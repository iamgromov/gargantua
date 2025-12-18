import { type FC } from 'react';

import { useDocumentTitle } from '@/shared/hooks';
import { Typography } from '@/shared/ui';

import styles from './About.module.scss';

export const About: FC = () => {
  useDocumentTitle('About');

  console.log(document.timeline);

  return (
    <div className={styles.main}>
      <Typography variant='h1'>About</Typography>
    </div>
  );
};
