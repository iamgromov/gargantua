import { type FC, type ReactNode } from 'react';

import { BodyXLargeMedium, HeadingStandard, Link } from '@/shared/ui';

import { getSourceLabel } from './constants';

import styles from './ComponentDemo.module.scss';

interface Props {
  title: string;
  description: string;
  link: string;
  children: ReactNode;
}

export const Section: FC<Props> = ({ title, description, link, children }) => (
  <section className={ styles.section }>
    <header className={ styles.header }>
      <div className={ styles.info }>
        <HeadingStandard>{ title }</HeadingStandard>
        <BodyXLargeMedium className={ styles.description }>{ description }</BodyXLargeMedium>
      </div>
      <Link href={ link }>{ getSourceLabel(link) }</Link>
    </header>
    { children }
  </section>
);
