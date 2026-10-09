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
  TANSTACK: 'https://tanstack.com/query/latest',
  REDUX: 'https://redux.js.org/toolkit/',
  JS: 'https://developer.mozilla.org/ru/docs/Web/JavaScript'
} as const;

export interface FooterLogo {
  id: 'react' | 'tanstack' | 'redux' | 'js';
  href: string;
  Component: FC<SVGProps<SVGSVGElement>>;
}

export interface FooterLink {
  href: string;
  title: string;
}
