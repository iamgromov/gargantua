import { type FC } from 'react';

import { PageTitle } from '@/shared/ui';

import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={ styles.wrapper }>
      <PageTitle title='Home' />
    </div>
  );
};
