import { type StardustLayer, type StardustRange } from './types';

/**
 * Планы глубины: чем ближе частица, тем она крупнее, ярче и быстрее.
 * Количество точек задаётся суммой count — общий фон правится здесь.
 */
export const STARDUST_LAYERS: StardustLayer[] = [
  {
    count: 96,
    size: [0.8, 1.4],
    opacity: [0.12, 0.5],
    drift: [1.5, 4],
    driftDuration: [140, 220],
    twinkleDuration: [14, 28]
  },
  {
    count: 52,
    size: [1.2, 2],
    opacity: [0.25, 0.7],
    drift: [3, 6],
    driftDuration: [100, 170],
    twinkleDuration: [10, 20]
  },
  {
    count: 28,
    size: [1.8, 2.8],
    opacity: [0.4, 0.95],
    drift: [5, 9],
    driftDuration: [70, 130],
    twinkleDuration: [7, 15]
  }
];

/** Позиция точки в процентах от размеров вьюпорта */
export const STARDUST_POSITION: StardustRange = [1, 99];

/** Радиус свечения точки, px */
export const STARDUST_GLOW: StardustRange = [2, 4];

/** Длительность перелива цвета, s */
export const STARDUST_COLOR_DURATION: StardustRange = [60, 140];
