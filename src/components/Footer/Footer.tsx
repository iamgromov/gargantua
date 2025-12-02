import { type FC, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { LINKS } from 'shared/constants';
import { CustomLink, Logo } from 'shared/ui';

import styles from './Footer.module.scss';

export const Footer: FC = (): ReactElement => {
  return (
    <div className={styles.footer}>
      <div className={styles.column}>
        <Link to='/' className={styles.logo}>
          <Logo />
        </Link>
      </div>

      <div className={styles.column}>
        <CustomLink href={LINKS.REPO} title='GitHub Repo' />

        <CustomLink href={LINKS.TELEGRAM} title={`@iamgromov / ${new Date().getFullYear()}`} />
      </div>
    </div>
  );
};
