import { type FC } from 'react';

import { Paper } from '@/shared/ui';

import styles from '../../Components.module.scss';
import { PAPER_INTENTS } from '../../constants';

export const PaperDemo: FC = () => (
  <div className={ styles.column }>
    { PAPER_INTENTS.map(({ value, label }) => (
      <Paper key={ value } intent={ value }>
        { label }
      </Paper>
    )) }
  </div>
);
