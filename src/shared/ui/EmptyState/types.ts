import type { CSSProperties, ReactNode } from 'react';

import { type ButtonProps } from '../Button';

export interface EmptyStateProps {
  /** Заголовок. */
  title: ReactNode;
  /** Подзаголовок. */
  subtitle?: ReactNode;
  /** Изображение (URL или путь к файлу). */
  image?: string;
  /** Альтернативный текст изображения. */
  imageAlt?: string;
  /** Кнопки действий — массив пропсов `Button` с уникальным `key`, рендерятся в переданном порядке. */
  buttons?: ButtonProps[];
  /** Дополнительный класс. */
  className?: string;
  /** Дополнительные инлайн-стили. */
  style?: CSSProperties;
}
