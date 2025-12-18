import { memo, type FC, type ReactElement } from 'react';

import { Button, Logo, ThemeSwitcher } from '@/shared/ui';

import { Profile } from '@/assets/icons';
import styles from './Header.module.scss';

export const Header: FC = memo((): ReactElement => {
  return (
    <div className={styles.header}>
      <Logo className={styles.logo} />

      <div className={styles.controls}>
        <Button to='/about' variant='ghost' size='small'>
          About
        </Button>
        <Button to='/contacts' variant='ghost' size='small'>
          Contacts
        </Button>
        <Button to='/auth' variant='link' size='small'>
          <Profile />
        </Button>

        <ThemeSwitcher />
      </div>
    </div>
  );
});
