import type { FC, SVGProps } from 'react';

export enum LINKS {
  // PROFILE
  REPO = 'https://github.com/iamgromov/gargantua',
  TELEGRAM = 'https://t.me/iamgromov',

  // STUB
  STUB = 'https://www.youtube.com/watch?v=K5zP7eQltDE',

  // DOCS
  REACT = 'https://react.dev/',
  TANSTACK = 'https://tanstack.com/query/latest',
  REDUX = 'https://redux.js.org/toolkit/',
  JS = 'https://developer.mozilla.org/ru/docs/Web/JavaScript'
};

export interface FooterLogo {
  id: 'react' | 'tanstack' | 'redux' | 'js';
  href: string;
  Component: FC<SVGProps<SVGSVGElement>>;
}

export interface FooterLink {
  href: string;
  title: string;
}
