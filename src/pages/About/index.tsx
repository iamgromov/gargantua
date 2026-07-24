import { type FC, lazy, Suspense } from 'react';

import { Spinner } from '@/shared/ui';

const AboutPage = lazy(() => import('./About').then((m) => ({ default: m.About })));

export const About: FC = () => (
  <Suspense fallback={ <Spinner size='large' fullHeight={ true } /> }>
    <AboutPage />
  </Suspense>
);
