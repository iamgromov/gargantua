import { type FC } from 'react';

import { Typography, TypographyVariant } from '@/shared/ui';

import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={ styles.wrapper }>
      <Typography variant={ TypographyVariant.H1 }>Home</Typography>
    </div>
  );
};
