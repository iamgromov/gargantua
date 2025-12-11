import type { FC } from 'react';

import { Typography } from '@/shared/ui';

import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
  return (
    <div className={styles.main}>
      <Typography variant='t30b'>NotFound</Typography>
    </div>
  );
};
