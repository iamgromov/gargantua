import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { SLICE_NAMES, type ThemeType } from '../types';

const getTheme = (): ThemeType => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  const storedTheme = localStorage.getItem('theme') as ThemeType;
  return storedTheme || 'light';
};

const initialState: ThemeType = getTheme();

const themeSlice = createSlice({
  name: SLICE_NAMES.THEME,
  initialState,
  reducers: {
    setTheme: (_, action: PayloadAction<ThemeType>) => action.payload,
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
