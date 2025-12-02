import { type FC, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Button, Logo } from 'shared/ui';

import styles from './Header.module.scss';

export const Header: FC = (): ReactElement => {
  return (
    <div className={styles.header}>
      <Link to='/' className={styles.logo}>
        <Logo />
      </Link>

      <Button title='SWITCH' />
    </div>
  );
};
