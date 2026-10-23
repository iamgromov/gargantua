import { useLocation } from 'react-router-dom';

import { PAGE_BACKGROUND_BY_ROUTE, PageBackgroundIntent, ROUTES } from '@/constants';

/** Определяет вариант фона для текущего маршрута */
export const usePageBackground = (): PageBackgroundIntent => {
  const { pathname } = useLocation();

  return PAGE_BACKGROUND_BY_ROUTE[pathname as ROUTES] ?? PageBackgroundIntent.Stardust;
};
