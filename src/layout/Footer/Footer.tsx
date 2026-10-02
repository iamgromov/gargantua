import { memo, type FC, type ReactElement } from 'react';

import { Link, Logo, ThemeSwitcher } from '@/shared/ui';

import { DOCS_LINKS, PROFILE_LINKS, STUB_LINKS } from './constants';

import styles from './Footer.module.scss';

export const Footer: FC = memo((): ReactElement => {

  return (
    <footer className={ styles.footer }>
      <div className={ styles.footer_left_column }>
        <div className={ styles.links_block }>
          { PROFILE_LINKS.map((link) => (
            <Link key={ link.href } href={ link.href } title={ link.title } />
          )) }
        </div>
        <div className={ styles.links_block }>
          { STUB_LINKS.map((link) => (
            <Link key={ link.href } href={ link.href } title={ link.title } />
          )) }
          <div className={ styles.dependencies }>
            { DOCS_LINKS.map(({ id, Component, href }) => (
              <Link key={ id } href={ href } aria-label={ id }>
                <Component className={ styles.dependency_logo } />
              </Link>
            )) }
          </div>
        </div>
      </div>
      <div className={ styles.footer_right_column }>
        <Logo className={ styles.logo } />
        <ThemeSwitcher />
      </div>
    </footer>
  );
});
