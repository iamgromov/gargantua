import { type FC } from 'react';

import { EmptyState } from '@/shared/ui';
import { Intent, Size } from '@/shared/ui/Button';

import styles from '../../Components.module.scss';

export const EmptyStateDemo: FC = () => (
  <div className={ styles.column }>
    <EmptyState
      image='/rocket.png'
      imageAlt='Ракета'
      title='Здесь пока ничего нет'
      subtitle='Но совсем скоро появится — заглядывайте позже'
      buttons={ [
        { intent: Intent.Secondary, size: Size.Large, key:'extra', children: 'Дополнительная' },
        { intent: Intent.Primary, size: Size.Large, key:'main', children: 'Основная' }
      ] }
    />
  </div>
);
