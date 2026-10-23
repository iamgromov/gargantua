import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import { usePageBackground } from '@/hooks';
import { ScrollToTop } from '@/shared/ui';

import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { PageBackground } from './PageBackground/PageBackground';

import styles from './Layout.module.scss';

export const Layout: FC = () => {
  const background = usePageBackground();

  return (
    <>
      <Header />
      <div className={ styles.layout }>
        <PageBackground intent={ background } />
        <main className={ styles.content }>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};
