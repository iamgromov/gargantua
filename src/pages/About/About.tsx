import { type FC } from 'react';

import { PageTitle } from '@/shared/ui';

import styles from './About.module.scss';

export const About: FC = () => {
  return (
    <div className={ styles.wrapper }>
      <PageTitle title='About' documentTitle='About' />
    </div>
  );
};
