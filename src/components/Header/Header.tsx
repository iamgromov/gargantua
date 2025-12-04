import { type FC, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Button, Logo, ThemeSwitcher } from 'shared/ui';

import styles from './Header.module.scss';

import { Profile } from 'assets/icons';

export const Header: FC = (): ReactElement => {
  return (
    <div className={styles.header}>
      <Link to='/' className={styles.logo}>
        <Logo />
      </Link>

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

        <Button variant='link' size='small'>
          <ThemeSwitcher />
        </Button>
      </div>
    </div>
  );
};
