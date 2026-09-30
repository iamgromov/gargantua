import { type FC } from 'react';

import { Typography } from '@/shared/ui';

import styles from '../../Components.module.scss';
import { TYPOGRAPHY_VARIANTS } from '../../constants';

export const TypographyDemo: FC = () => (
  <div className={ styles.row }>
    { TYPOGRAPHY_VARIANTS.map((variant) => (
      <Typography variant={ variant } key={ variant }>
        Headline
      </Typography>
    )) }
  </div>
);
