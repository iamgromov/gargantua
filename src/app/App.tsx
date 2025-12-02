import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, NotFound } from 'pages/index';
import { MainLayout } from 'shared/layouts';

export const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};
