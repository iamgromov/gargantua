import { memo, type FC, type ReactElement } from 'react';

import { Link, Logo, ThemeSwitcher } from '@/shared/ui';

import { FOOTER_LINKS, LINKS, LOGOS } from './constants';

import styles from './Footer.module.scss';

export const Footer: FC = memo((): ReactElement => {

  return (
    <footer className={ styles.footer }>
      <div className={ styles.column }>
        { FOOTER_LINKS.map((link) => (
          <Link key={ link.href } href={ link.href } title={ link.title } />
        )) }
        <Link href={ LINKS.STUB }title='Created with:' />
        <div className={ styles.logos }>
          { LOGOS.map((elem) => (
            <elem.value key={ `logo-${elem.id}` } />
          )) }
        </div>
      </div>
      <div className={ styles.column }>
        <Logo className={ styles.logo } />
        <ThemeSwitcher />
      </div>
    </footer>
  );
});
