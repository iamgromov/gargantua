import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import { ScrollToTop } from '@/shared/ui';

import styles from './Layout.module.scss';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Header />

      <Outlet />

      <Footer />

      <ScrollToTop />
    </div>
  );
};
