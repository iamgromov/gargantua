import { memo, useCallback, useState, type FC, type ReactElement } from 'react';

import { Menu } from '@/assets/icons';
import { ROUTES } from '@/constants';
import { BottomSheet, IconButton, Logo } from '@/shared/ui';
import { Button, Intent, Size } from '@/shared/ui/Button';

import styles from './HeaderMobile.module.scss';

export const HeaderMobile: FC = memo((): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <div className={ styles.header }>
      <Logo className={ styles.logo } />
      <IconButton
        variant='ghost'
        icon={ <Menu /> }
        className={ styles.menu }
        onClick={ openMenu }
      />

      <BottomSheet open={ isMenuOpen } onClose={ closeMenu }>
        <nav className={ styles.nav }>
          <Button
            to={ ROUTES.ABOUT }
            intent={ Intent.Ghost }
            size={ Size.Small }
            onClick={ closeMenu }
          >
            About
          </Button>
          <Button
            to={ ROUTES.COMPONENTS }
            intent={ Intent.Ghost }
            size={ Size.Small }
            onClick={ closeMenu }
          >
            Components
          </Button>
          <Button
            to={ ROUTES.CONTACTS }
            intent={ Intent.Ghost }
            size={ Size.Small }
            onClick={ closeMenu }
          >
            Contacts
          </Button>
        </nav>
      </BottomSheet>
    </div>
  );
});
