import { memo, type FC, type ReactElement } from 'react';

import { ROUTES } from '@/shared/routes';
import { Button, IconButton, Logo, ThemeSwitcher } from '@/shared/ui';

import { Profile } from '@/assets/icons';
import styles from './Header.module.scss';

export const Header: FC = memo((): ReactElement => {
  return (
    <div className={styles.header}>
      <Logo className={styles.logo} />

      <div className={styles.controls}>
        <Button to={ROUTES.ABOUT} variant='ghost' size='small'>
          About
        </Button>
        <Button to={ROUTES.CONTACTS} variant='ghost' size='small'>
          Contacts
        </Button>

        <IconButton to={ROUTES.AUTH} icon={<Profile />} variant='ghost' size='small' />

        <ThemeSwitcher />
      </div>
    </div>
  );
});
