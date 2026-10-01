import type { FC } from 'react';
import dayjs from 'dayjs';

import { ReactLogo, ReduxLogo, JSLogo, TanstackLogo } from '@/assets/logos';
import type { FooterLink } from '@/shared/types';

import type { Links } from './types';

export const CURRENT_YEAR = dayjs().year();

export const LINKS: Links = {
  REPO: 'https://github.com/iamgromov/gargantua',
  TELEGRAM: 'https://t.me/iamgromov',
  STUB: 'https://www.youtube.com/watch?v=K5zP7eQltDE'
};

export const FOOTER_LINKS: FooterLink[] = [
  {
    href: LINKS.REPO,
    title: 'GitHub Repo'
  },
  {
    href: LINKS.TELEGRAM,
    title: `@iamgromov / ${CURRENT_YEAR}`
  }
];

export const LOGOS: Array<{ id: number; value: FC }> = [
  { id: 1, value: ReactLogo },
  { id: 2, value: TanstackLogo },
  { id: 3, value: ReduxLogo },
  { id: 4, value: JSLogo }
];
