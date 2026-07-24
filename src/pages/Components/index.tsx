import { type FC, lazy, Suspense } from 'react';

import { Spinner } from '@/shared/ui';

const ComponentsPage = lazy(() => import('./Components').then((m) => ({ default: m.Components })));

export const Components: FC = () => (
  <Suspense fallback={ <Spinner size='large' fullHeight={ true } /> }>
    <ComponentsPage />
  </Suspense>
);
