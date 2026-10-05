import type { ComponentProps } from 'react';

export type LinkProps = ComponentProps<'a'> & {
  /** Путь внутреннего маршрута (React Router). */
  to?: string;
  /** Внешний URL, открывается в новой вкладке. */
  href?: string;
  /** Текст ссылки, если не передан children. */
  title?: string;
  /** Подчёркивание при наведении (по умолчанию включено). */
  underline?: boolean;
};
