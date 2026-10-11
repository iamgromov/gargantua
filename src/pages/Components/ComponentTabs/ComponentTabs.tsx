import { type FC } from 'react';
import cn from 'classnames';

import { Paper, PaperIntent } from '@/shared/ui';

import { COMPONENTS_MAP } from '../constants';

import styles from './ComponentTabs.module.scss';

interface Props {
  activeId: string;
  onSelect: (id: string) => void;
}

/** Боковая навигация по списку компонентов страницы */
export const ComponentTabs: FC<Props> = ({ activeId, onSelect }) => (
  <Paper className={ styles.nav } intent={ PaperIntent.Primary }>
    { COMPONENTS_MAP.map(({ id, title }) => (
      <button
        key={ id }
        type='button'
        className={ cn(styles.navItem, { [styles.active]: id === activeId }) }
        onClick={ () => onSelect(id) }
      >
        { title }
      </button>
    )) }
  </Paper>
);
