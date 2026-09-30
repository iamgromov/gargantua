import { type FC, type ReactNode } from 'react';

import { Typography } from '@/shared/ui';

import styles from './Section.module.scss';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({ title, children }) => (
  <section className={ styles.section }>
    <Typography variant='h1'>{ title }</Typography>

    { children }
  </section>
);
