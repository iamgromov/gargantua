import type { FC, SVGProps } from 'react';

import { REPO_URL } from '@/constants';

export const LINKS = {
  // PROFILE
  REPO: REPO_URL,
  TELEGRAM: 'https://t.me/iamgromov',

  // STUB
  STUB: 'https://www.youtube.com/watch?v=K5zP7eQltDE',

  // DOCS
  REACT: 'https://react.dev/',
  REDUX: 'https://redux.js.org/toolkit/',
  TANSTACK: 'https://tanstack.com/query/latest',
  TYPESCRIPT: 'https://www.typescriptlang.org/docs/',
  VITE: 'https://vite.dev/'
} as const;

export interface FooterLogo {
  id: 'vite' | 'react' | 'ts' | 'tanstack' | 'redux' ;
  href: string;
  Component: FC<SVGProps<SVGSVGElement>>;
}

export interface FooterLink {
  href: string;
  title: string;
}
