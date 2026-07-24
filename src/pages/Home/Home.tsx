import { type FC } from 'react';

import { Typography } from '@/shared/ui';

import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={ styles.main }>
      <Typography variant='h1'>Home</Typography>
    </div>
  );
};
