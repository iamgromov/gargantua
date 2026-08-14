import type { FC } from 'react';

import { useDocumentTitle } from '@/hooks';
import { Typography } from '@/shared/ui';

import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
  useDocumentTitle('NotFound');

  return (
    <div className={ styles.main }>
      <Typography variant='h1'>NotFound</Typography>
    </div>
  );
};
