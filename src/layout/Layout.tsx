import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import { ScrollToTop } from '@/shared/ui';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

import styles from './Layout.module.scss';

export const Layout: FC = () => {
  return (
    <div className={ styles.layout }>
      <Header />

      <main className={ styles.content }>
        <Outlet />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};
