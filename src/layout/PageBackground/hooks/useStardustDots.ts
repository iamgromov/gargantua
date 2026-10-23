import { useMemo } from 'react';

import { STARDUST_COLOR_DURATION, STARDUST_GLOW, STARDUST_LAYERS, STARDUST_POSITION } from '../constants';
import { type StardustDot, type StardustLayer, type StardustRange } from '../types';

/** Округление до сотых, чтобы не раздувать инлайн-стили */
const round = (value: number): number => Number(value.toFixed(2));

/** Случайное значение из диапазона */
const randomBetween = ([min, max]: StardustRange): number =>
  // eslint-disable-next-line sonarjs/pseudo-random -- случайность только для декоративной анимации
  min + Math.random() * (max - min);

/** Случайное значение со знаком: частицы дрейфуют в разные стороны */
const signedRandom = (range: StardustRange): number =>
  // eslint-disable-next-line sonarjs/pseudo-random -- случайность только для декоративной анимации
  randomBetween(range) * (Math.random() < 0.5 ? -1 : 1);

/** Задержка со знаком минус — анимация стартует уже в движении */
const randomDelay = (duration: number): string => `-${round(randomBetween([0, duration]))}s`;

/** Собирает точку: позицию, размер, яркость и тайминги анимаций */
const createDot = (id: number, layer: StardustLayer): StardustDot => {
  const driftDuration = round(randomBetween(layer.driftDuration));
  const twinkleDuration = round(randomBetween(layer.twinkleDuration));
  const colorDuration = round(randomBetween(STARDUST_COLOR_DURATION));
  const maxOpacity = randomBetween(layer.opacity);

  return {
    id,
    style: {
      '--dot-x': `${round(randomBetween(STARDUST_POSITION))}%`,
      '--dot-y': `${round(randomBetween(STARDUST_POSITION))}%`,
      '--dot-size': `${round(randomBetween(layer.size))}px`,
      '--dot-glow': `${round(randomBetween(STARDUST_GLOW))}px`,
      '--dot-opacity-min': `${round(maxOpacity * 0.35)}`,
      '--dot-opacity-max': `${round(maxOpacity)}`,
      '--dot-drift-x': `${round(signedRandom(layer.drift))}vmin`,
      '--dot-drift-y': `${round(signedRandom(layer.drift))}vmin`,
      '--dot-drift-duration': `${driftDuration}s`,
      '--dot-drift-delay': randomDelay(driftDuration),
      '--dot-twinkle-duration': `${twinkleDuration}s`,
      '--dot-twinkle-delay': randomDelay(twinkleDuration),
      '--dot-color-duration': `${colorDuration}s`,
      '--dot-color-delay': randomDelay(colorDuration)
    }
  };
};

/** Генерирует мерцающие частицы фона один раз за жизненный цикл компонента */
export const useStardustDots = (): StardustDot[] =>
  useMemo(() => {
    let index = 0;

    return STARDUST_LAYERS.flatMap((layer) =>
      Array.from({ length: layer.count }, () => createDot(index++, layer))
    );
  }, []);
