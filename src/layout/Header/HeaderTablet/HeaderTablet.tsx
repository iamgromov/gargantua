import { memo, useCallback, useState, type FC, type ReactElement } from 'react';

import { Menu } from '@/assets/icons';
import { Button, Drawer, HeadingStandard, Intent, Link, Logo, Size, ThemeSwitcher } from '@/shared/ui';

import { NAV_LINKS } from '../constants';

import styles from './HeaderTablet.module.scss';

export const HeaderTablet: FC = memo((): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <div className={ styles.header }>
      <Logo className={ styles.logo } />
      <div className={ styles.controls }>
        <ThemeSwitcher />
        <Button
          intent={ Intent.Ghost }
          size={ Size.Small }
          icon={ <Menu /> }
          round={ true }
          onClick={ openMenu }
        />
      </div>
      <Drawer open={ isMenuOpen } onClose={ closeMenu }>
        <nav className={ styles.nav }>
          { NAV_LINKS.map(({ to, title }) => (
            <Link
              key={ to }
              to={ to }
              onClick={ closeMenu }
              underline={ false }
            >
              <HeadingStandard>{ title }</HeadingStandard>
            </Link>
          )) }
        </nav>
      </Drawer>
    </div>
  );
});
