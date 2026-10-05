import { memo, useCallback, useState, type FC, type ReactElement } from 'react';

import { Menu } from '@/assets/icons';
import { BottomSheet, HeadingSmall, IconButton, IconButtonVariant, Link, Logo } from '@/shared/ui';

import { NAV_LINKS } from '../constants';

import styles from './HeaderMobile.module.scss';

export const HeaderMobile: FC = memo((): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <div className={ styles.header }>
      <Logo className={ styles.logo } />
      <IconButton
        variant={ IconButtonVariant.Ghost }
        icon={ <Menu /> }
        className={ styles.menu }
        onClick={ openMenu }
      />
      <BottomSheet open={ isMenuOpen } onClose={ closeMenu }>
        <nav className={ styles.nav }>
          { NAV_LINKS.map(({ to, title }) => (
            <Link key={ to } to={ to } onClick={ closeMenu }>
              <HeadingSmall>{ title }</HeadingSmall>
            </Link>
          )) }
        </nav>
      </BottomSheet>
    </div>
  );
});
