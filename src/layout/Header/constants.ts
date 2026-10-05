import { ROUTES } from '@/constants';

export interface HeaderNavLink {
  to: ROUTES;
  title: string;
}

export const NAV_LINKS: HeaderNavLink[] = [
  { to: ROUTES.COMPONENTS, title: 'Components' },
  { to: ROUTES.ABOUT, title: 'About' },
  { to: ROUTES.CONTACTS, title: 'Contacts' }
];
