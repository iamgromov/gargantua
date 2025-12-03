import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTheme, type AppDispatch, type RootState } from 'shared/store';
import type { UseThemeReturn } from 'shared/types';

export const useTheme = (): UseThemeReturn => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme);

  const toggleTheme = (): void => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return toggleTheme;
};
