import { type FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/shared/layouts';
import { ROUTES } from '@/shared/routes';
import { Spinner } from '@/shared/ui';

const Home = lazy(() => import('@/pages/Home/Home').then((module) => ({ default: module.Home })));
const About = lazy(() =>
  import('@/pages/About/About').then((module) => ({ default: module.About }))
);
const NotFound = lazy(() =>
  import('@/pages/NotFound/NotFound').then((module) => ({ default: module.NotFound }))
);

export const App: FC = () => {
  return (
    <Suspense fallback={<Spinner size='large' fullHeight={true} />}>
      <Routes>
        <Route path={ROUTES.DEFAULT} element={<MainLayout />}>
          <Route path={ROUTES.DEFAULT} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
