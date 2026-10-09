import { memo, useCallback, useState, type FC, type ReactElement } from 'react';

import { Menu } from '@/assets/icons';
import { BottomSheet, Button, HeadingSmall, Intent, Link, Logo, Size } from '@/shared/ui';

import { NAV_LINKS } from '../constants';

import styles from './HeaderMobile.module.scss';

export const HeaderMobile: FC = memo((): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <div className={ styles.header }>
      <Logo className={ styles.logo } />
      <Button
        className={ styles.menu }
        intent={ Intent.Ghost }
        size={ Size.Small }
        icon={ <Menu /> }
        round={ true }
        onClick={ openMenu }
      />
      <BottomSheet
        title='Pages'
        open={ isMenuOpen }
        onClose={ closeMenu }
      >
        <nav className={ styles.nav }>
          { NAV_LINKS.map(({ to, title }) => (
            <Link
              key={ to }
              to={ to }
              onClick={ closeMenu }
              underline={ false }
            >
              <HeadingSmall>{ title }</HeadingSmall>
            </Link>
          )) }
        </nav>
      </BottomSheet>
    </div>
  );
});
