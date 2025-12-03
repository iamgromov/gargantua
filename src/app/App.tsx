import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { About, Home, NotFound } from 'pages/index';
import { MainLayout } from 'shared/layouts';

export const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};
