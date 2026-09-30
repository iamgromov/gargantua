import { type FC } from 'react';

import { Spinner } from '@/shared/ui';

import styles from '../../Components.module.scss';
import { SPINNERS_SIZES } from '../../constants';

export const SpinnersDemo: FC = () => (
  <div className={ styles.row }>
    { SPINNERS_SIZES.map((size) => (
      <Spinner key={ size.value } size={ size.value } />
    )) }
  </div>
);
