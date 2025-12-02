import { type FC, type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from 'components/index';

import styles from './MainLayout.module.scss';

export const MainLayout: FC = (): ReactElement => {
  return (
    <div className={styles.layout}>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
