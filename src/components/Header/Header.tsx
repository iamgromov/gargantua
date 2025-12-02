import { type FC, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from 'shared/ui';

import styles from './Header.module.scss';

import { ThemeSwitcher } from 'assets/icons';

export const Header: FC = (): ReactElement => {
  return (
    <div className={styles.header}>
      <Link to='/' className={styles.logo}>
        <Logo />
      </Link>

      <div className={styles.controls}>
        <button className={styles.button}></button>
        <button className={styles.button}></button>
        <div className={styles.switcher}>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
