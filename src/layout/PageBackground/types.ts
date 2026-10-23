import type { CSSProperties } from 'react';

import type { PageBackgroundIntent } from '@/constants';

export interface PageBackgroundProps {
  /** Вариант фона для текущего маршрута. */
  intent: PageBackgroundIntent;
}

/** Диапазон значений параметра частицы */
export type StardustRange = readonly [number, number];

/** Настройки одного плана глубины: дальний, средний, ближний */
export interface StardustLayer {
  /** Количество частиц на плане */
  count: number;
  /** Размер частицы, px */
  size: StardustRange;
  /** Яркость частицы: от минимума к максимуму мерцания */
  opacity: StardustRange;
  /** Амплитуда дрейфа, vmin */
  drift: StardustRange;
  /** Длительность дрейфа, s */
  driftDuration: StardustRange;
  /** Длительность мерцания, s */
  twinkleDuration: StardustRange;
}

/** Инлайн-стиль точки: параметры анимаций передаются CSS-переменными */
export type StardustDotStyle = CSSProperties & Record<`--dot-${string}`, string>;

export interface StardustDot {
  id: number;
  style: StardustDotStyle;
}
