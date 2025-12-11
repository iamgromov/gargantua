import { type FC, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { LINKS } from '@/shared/constants';
import type { FooterLink } from '@/shared/types';
import { Button, CustomLink, Logo, ThemeSwitcher } from '@/shared/ui';

import { ReactLogo, ReduxLogo, JSLogo, CSSLogo, HTMLLogo } from '@/assets/icons';
import styles from './Footer.module.scss';

const currentYear = new Date().getFullYear();

const links: FooterLink[] = [
  {
    href: LINKS.REPO,
    title: 'GitHub Repo',
  },
  {
    href: LINKS.TELEGRAM,
    title: `@iamgromov / ${currentYear}`,
  },
  {
    href: '',
    title: '',
  },
  {
    href: LINKS.STUB,
    title: 'Created with:',
  },
];

const logos = [ReactLogo, ReduxLogo, JSLogo, CSSLogo, HTMLLogo];

export const Footer: FC = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        {links.map((link, index) => (
          <CustomLink key={index} href={link.href} title={link.title} />
        ))}

        <div className={styles.row}>
          {logos.map((LogoComponent, index) => (
            <LogoComponent key={index} />
          ))}
        </div>
      </div>

      <div className={styles.column}>
        <Link to='/' className={styles.logo}>
          <Logo />
        </Link>

        <Button variant='link' size='small'>
          <ThemeSwitcher />
        </Button>
      </div>
    </footer>
  );
};
