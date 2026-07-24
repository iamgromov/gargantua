import { type FC, lazy, Suspense } from 'react';

import { Spinner } from '@/shared/ui';

const NotFoundPage = lazy(() => import('./NotFound').then((m) => ({ default: m.NotFound })));

export const NotFound: FC = () => (
  <Suspense fallback={ <Spinner size='large' fullHeight={ true } /> }>
    <NotFoundPage />
  </Suspense>
);
