import { useLocation } from 'react-router-dom';

/** Определяет, доступен ли возврат на предыдущую страницу */
export const useCanGoBack = (): boolean => {
  useLocation();

  return (window.history.state?.idx ?? 0) > 0;
};
