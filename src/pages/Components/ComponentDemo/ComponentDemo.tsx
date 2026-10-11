import { type FC, type ReactNode } from 'react';

import { BodyXLargeMedium, HeadingStandard, Link, Paper } from '@/shared/ui';

import { getSourceLabel } from './constants';

import styles from './ComponentDemo.module.scss';

interface Props {
  title: string;
  description: string;
  link: string;
  children: ReactNode;
}

export const ComponentDemo: FC<Props> = ({ title, description, link, children }) => (
  <Paper className={ styles.wrapper }>
    <header className={ styles.header }>
      <div className={ styles.info }>
        <HeadingStandard>{ title }</HeadingStandard>
        <BodyXLargeMedium className={ styles.description }>{ description }</BodyXLargeMedium>
      </div>
      <Link href={ link }>{ getSourceLabel(link) }</Link>
    </header>
    { children }
  </Paper>
);
