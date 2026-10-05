import { type FC, type ReactNode } from 'react';

import { HeadingStandard } from '@/shared/ui';

import styles from './Section.module.scss';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({ title, children }) => (
  <section className={ styles.section }>
    <HeadingStandard>{ title }</HeadingStandard>
    { children }
  </section>
);
