import { type FC } from 'react';

import styles from '../../Components.module.scss';
import { TYPOGRAPHY_SAMPLES } from '../../constants';

export const TypographyDemo: FC = () => (
  <div className={ styles.row }>
    { TYPOGRAPHY_SAMPLES.map(({ label, Component }) => (
      <Component key={ label }>{ label }</Component>
    )) }
  </div>
);
