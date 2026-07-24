import type { FC } from 'react';
import dayjs from 'dayjs';

import { ReactLogo, ReduxLogo, JSLogo, CSSLogo, HTMLLogo } from '@/assets/icons';
import type { FooterLink, Links } from '@/shared/types';

export const CURRENT_YEAR = dayjs().year();

export const LINKS: Links = {
  REPO: 'https://github.com/iamgromov/gargantua',
  STUB: 'https://www.youtube.com/watch?v=K5zP7eQltDE',
  TELEGRAM: 'https://t.me/iamgromov'
};

export const FOOTER_LINKS: FooterLink[] = [
  {
    href: LINKS.REPO,
    title: 'GitHub Repo'
  },
  {
    href: LINKS.TELEGRAM,
    title: `@iamgromov / ${CURRENT_YEAR}`
  },
  {
    href: '',
    title: ''
  },
  {
    href: LINKS.STUB,
    title: 'Created with:'
  }
];

export const LOGOS: Array<{ id: number; value: FC }> = [
  { id: 1, value: ReactLogo },
  { id: 2, value: ReduxLogo },
  { id: 3, value: JSLogo },
  { id: 4, value: CSSLogo },
  { id: 5, value: HTMLLogo }
];
