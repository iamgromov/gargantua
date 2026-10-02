import { type FC, lazy, Suspense } from 'react';

import { Spinner, SpinnerSize } from '@/shared/ui';

const NotFoundPage = lazy(() => import('./NotFound').then((m) => ({ default: m.NotFound })));

export const NotFound: FC = () => (
  <Suspense fallback={ <Spinner size={ SpinnerSize.Large } fullHeight={ true } /> }>
    <NotFoundPage />
  </Suspense>
);
