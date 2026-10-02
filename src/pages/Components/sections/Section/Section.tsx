import { type FC, type ReactNode } from 'react';

import { Typography, TypographyVariant } from '@/shared/ui';

import styles from './Section.module.scss';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({ title, children }) => (
  <section className={ styles.section }>
    <Typography variant={ TypographyVariant.H1 }>{ title }</Typography>

    { children }
  </section>
);
