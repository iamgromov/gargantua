import { memo, type FC, type ReactElement } from 'react';

import { ROUTES } from '@/constants';
import { useBreakpoint } from '@/hooks';
import { Logo, ThemeSwitcher } from '@/shared/ui';
import { Button, Intent, Size } from '@/shared/ui/Button';

import { HeaderMobile } from './HeaderMobile/HeaderMobile';

import styles from './Header.module.scss';

const HeaderDesktop: FC = memo((): ReactElement => {
  return (
    <div className={ styles.header }>
      <Logo className={ styles.logo } />

      <div className={ styles.controls }>
        <Button to={ ROUTES.ABOUT } intent={ Intent.Ghost } size={ Size.Small }>
          About
        </Button>
        <Button to={ ROUTES.COMPONENTS } intent={ Intent.Ghost } size={ Size.Small }>
          Components
        </Button>
        <Button to={ ROUTES.CONTACTS } intent={ Intent.Ghost } size={ Size.Small }>
          Contacts
        </Button>
        <ThemeSwitcher />
      </div>
    </div>
  );
});

export const Header: FC = memo((): ReactElement => {
  const { isMobile } = useBreakpoint();

  if (isMobile) {
    return <HeaderMobile />;
  }

  return <HeaderDesktop />;
});
