import type { FC } from 'react';

import { useDocumentTitle } from '@/hooks';
import { Typography, TypographyVariant } from '@/shared/ui';

import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
  useDocumentTitle('NotFound');

  return (
    <div className={ styles.main }>
      <Typography variant={ TypographyVariant.H1 }>NotFound</Typography>
    </div>
  );
};
