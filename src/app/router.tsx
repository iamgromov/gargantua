import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@/constants';
import { Layout } from '@/layout';
import { About, Components, Home, NotFound } from '@/pages';

const basename = import.meta.env.BASE_URL;

export const router = createBrowserRouter(
  [
    {
      path: ROUTES.MAIN,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: ROUTES.ABOUT,
          element: <About />
        },
        {
          path: ROUTES.COMPONENTS,
          element: <Components />
        },
        {
          path: ROUTES.NOT_FOUND,
          element: <NotFound />
        }
      ]
    }
  ],
  { basename }
);
