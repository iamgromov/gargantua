import type { CSSProperties } from 'react';

export interface PageTitleProps {
  /** Заголовок страницы; по умолчанию используется и как заголовок вкладки. */
  title: string;
  /** Переопределяет заголовок вкладки документа. */
  documentTitle?: string;
  /** Дополнительный класс. */
  className?: string;
  /** Дополнительные инлайн-стили. */
  style?: CSSProperties;
}
