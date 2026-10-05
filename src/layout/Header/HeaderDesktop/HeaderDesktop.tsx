import { memo, type FC, type ReactElement } from 'react';

import { BodyLargeRegular, Link, Logo, ThemeSwitcher } from '@/shared/ui';

import { NAV_LINKS } from '../constants';

import styles from './HeaderDesktop.module.scss';

export const HeaderDesktop: FC = memo((): ReactElement => {
  return (
    <div className={ styles.header }>
      <Logo className={ styles.logo } />

      <div className={ styles.controls }>
        { NAV_LINKS.map(({ to, title }) => (
          <Link key={ to } to={ to } underline={ false }>
            <BodyLargeRegular>{ title }</BodyLargeRegular>
          </Link>
        )) }
        <ThemeSwitcher />
      </div>
    </div>
  );
});
