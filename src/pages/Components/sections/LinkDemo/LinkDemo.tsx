import { type FC } from 'react';

import { ROUTES } from '@/constants';
import { BodyLargeMedium, LabelLargeMedium, Link } from '@/shared/ui';

import styles from '../../Components.module.scss';

export const LinkDemo: FC = () => (
  <div className={ styles.column }>
    <Link to={ ROUTES.ABOUT }>
      <BodyLargeMedium>Внутренняя ссылка на About</BodyLargeMedium>
    </Link>
    <Link to={ ROUTES.COMPONENTS } underline={ false }>
      <BodyLargeMedium>Внутренняя ссылка без подчёркивания</BodyLargeMedium>
    </Link>
    <Link href='https://react.dev/' title='Внешняя ссылка на React' />
    <Link href='https://react.dev/' aria-label='React'>
      <LabelLargeMedium>Внешняя ссылка с children</LabelLargeMedium>
    </Link>
  </div>
);
