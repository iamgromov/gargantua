import { type FC, lazy, Suspense } from 'react';

import { Spinner, SpinnerSize } from '@/shared/ui';

const AboutPage = lazy(() => import('./About').then((m) => ({ default: m.About })));

export const About: FC = () => (
  <Suspense fallback={ <Spinner size={ SpinnerSize.Large } fullHeight={ true } /> }>
    <AboutPage />
  </Suspense>
);
