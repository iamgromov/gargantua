import { type FC, lazy, Suspense } from 'react';

import { Spinner, SpinnerSize } from '@/shared/ui';

const HomePage = lazy(() => import('./Home').then((m) => ({ default: m.Home })));

export const Home: FC = () => (
  <Suspense fallback={ <Spinner size={ SpinnerSize.Large } fullHeight={ true } /> }>
    <HomePage />
  </Suspense>
);
