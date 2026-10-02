import dayjs from 'dayjs';

import { ReactLogo, ReduxLogo, JSLogo, TanstackLogo } from '@/assets/logos';

import { LINKS, type FooterLink, type FooterLogo } from './types';

export const CURRENT_YEAR = dayjs().year();

export const PROFILE_LINKS: FooterLink[] = [
  {
    href: LINKS.REPO,
    title: 'GitHub Repo'
  },
  {
    href: LINKS.TELEGRAM,
    title: `@iamgromov / ${CURRENT_YEAR}`
  }
];

export const STUB_LINKS: FooterLink[] = [
  {
    href: LINKS.STUB,
    title: 'Created with:'
  }
];

export const DOCS_LINKS: FooterLogo[] = [
  { id: 'react', Component: ReactLogo, href: LINKS.REACT },
  { id: 'tanstack', Component: TanstackLogo, href: LINKS.TANSTACK },
  { id: 'redux', Component: ReduxLogo, href: LINKS.REDUX },
  { id: 'js', Component: JSLogo, href: LINKS.JS }
];
