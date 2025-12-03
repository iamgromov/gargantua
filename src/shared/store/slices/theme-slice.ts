import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { SLICE_NAMES, type ThemeType } from '../types';

const initialState: ThemeType = 'light';

const themeSlice = createSlice({
  name: SLICE_NAMES.THEME,
  initialState: initialState as ThemeType,
  reducers: {
    setTheme: (_, action: PayloadAction<ThemeType>) => action.payload,
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
