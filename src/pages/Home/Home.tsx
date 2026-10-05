import { type FC } from 'react';

import { HeadingLarge } from '@/shared/ui';

import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={ styles.wrapper }>
      <HeadingLarge>Home</HeadingLarge>
    </div>
  );
};
