import { memo, type FC, type ReactElement } from 'react';

import { Logo } from '@/shared/ui';

import styles from './HeaderMobile.module.scss';

export const HeaderMobile: FC = memo((): ReactElement => {
  return (
    <div className={ styles.header }>
      <Logo className={ styles.logo } />
    </div>
  );
});
