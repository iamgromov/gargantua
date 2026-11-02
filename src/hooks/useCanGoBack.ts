import { NavigationType, useLocation, useNavigationType } from 'react-router-dom';

export interface CanGoBackState {
  /** Доступен ли возврат на предыдущую страницу. */
  canGoBack: boolean;
  /** Текущая страница открыта первым переходом внутри приложения. */
  isFirstBackAppearance: boolean;
}

/** Определяет, доступен ли возврат на предыдущую страницу */
export const useCanGoBack = (): CanGoBackState => {
  useLocation();

  const navigationType = useNavigationType();
  const historyIndex: number = window.history.state?.idx ?? 0;

  return {
    canGoBack: historyIndex > 0,
    isFirstBackAppearance: historyIndex === 1 && navigationType === NavigationType.Push
  };
};
