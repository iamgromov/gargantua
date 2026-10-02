import { type FC } from 'react';

import { useDocumentTitle } from '@/hooks';
import { Typography, TypographyVariant } from '@/shared/ui';

import styles from './About.module.scss';

export const About: FC = () => {
  useDocumentTitle('About');

  return (
    <div className={ styles.main }>
      <Typography variant={ TypographyVariant.H1 }>About</Typography>
    </div>
  );
};
