import { memo, useCallback, useState, type FC, type ReactElement } from 'react';

import { Menu } from '@/assets/icons';
import { Drawer, HeadingSmall, IconButton, IconButtonVariant, Link, Logo, ThemeSwitcher } from '@/shared/ui';

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
        <IconButton
          variant={ IconButtonVariant.Ghost }
          icon={ <Menu /> }
          className={ styles.menu }
          onClick={ openMenu }
        />
      </div>
      <Drawer open={ isMenuOpen } onClose={ closeMenu }>
        <nav className={ styles.nav }>
          { NAV_LINKS.map(({ to, title }) => (
            <Link key={ to } to={ to } onClick={ closeMenu }>
              <HeadingSmall>{ title }</HeadingSmall>
            </Link>
          )) }
        </nav>
      </Drawer>
    </div>
  );
});
