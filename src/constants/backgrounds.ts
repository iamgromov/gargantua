import { ROUTES } from './global';

/** Варианты декоративного фона страницы */
export enum PageBackgroundIntent {
  /** Фон по умолчанию — декоративный слой не рендерится */
  Default = 'default',
  /** Космическая пыль: мерцающие точки в медленном дрейфе */
  Stardust = 'stardust'
}

/** Соответствие маршрута и варианта фона */
export const PAGE_BACKGROUND_BY_ROUTE: Partial<Record<ROUTES, PageBackgroundIntent>> = {
  [ROUTES.ABOUT]: PageBackgroundIntent.Default
};
