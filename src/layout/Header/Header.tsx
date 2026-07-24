import { memo, type FC, type ReactElement } from 'react';

import { ROUTES } from '@/constants';
import { Logo, ThemeSwitcher } from '@/shared/ui';
import { Button, Intent, Size } from '@/shared/ui/Button';

import styles from './Header.module.scss';

export const Header: FC = memo((): ReactElement => {
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
