import { memo, type FC, type ReactElement } from 'react';

import { FOOTER_LINKS, LOGOS } from '@/shared/constants';
import { LinkButton, Logo, ThemeSwitcher } from '@/shared/ui';

import styles from './Footer.module.scss';

export const Footer: FC = memo((): ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        {FOOTER_LINKS.map((link) => (
          <LinkButton key={link.href} href={link.href} title={link.title} />
        ))}

        <div className={styles.row}>
          {LOGOS.map((elem) => (
            <elem.value key={`logo-${elem.id}`} />
          ))}
        </div>
      </div>

      <div className={styles.column}>
        <Logo className={styles.logo} />

        <ThemeSwitcher />
      </div>
    </footer>
  );
});
