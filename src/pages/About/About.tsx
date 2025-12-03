import type { FC } from 'react';

import { Typography } from 'shared/ui';

import styles from './About.module.scss';

export const About: FC = () => {
  return (
    <div className={styles.main}>
      <Typography variant='t30b'>About</Typography>
    </div>
  );
};
