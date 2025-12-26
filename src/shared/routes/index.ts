export const ROUTES = {
  ABOUT: '/about',
  AUTH: '/auth',
  CONTACTS: '/contacts',
  PRODUCTS: '/products',
  DEFAULT: '/',
  NOT_FOUND: '*',
} as const;

export type PathParams = {
  [ROUTES.PRODUCTS]: {
    productId: string;
  };
};
