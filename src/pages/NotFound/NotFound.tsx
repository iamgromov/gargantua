import type { FC } from 'react';

import { ROUTES } from '@/constants';
import { useDocumentTitle } from '@/hooks';
import { EmptyState, Intent } from '@/shared/ui';

import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
  useDocumentTitle('NotFound');

  return (
    <EmptyState
      className={ styles.wrapper }
      title='Такой страницы не существует'
      subtitle='Вернитесь на главную'
      buttons={ [
        { intent: Intent.Primary, key:'main', children: 'На главную', to: ROUTES.MAIN }
      ] }
    />
  );
};
