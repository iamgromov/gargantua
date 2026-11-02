import type { CSSProperties } from 'react';

export enum BackButtonPosition {
  Top = 'top',
  Left = 'left'
}

export interface PageTitleProps {
  /** Заголовок страницы; по умолчанию используется и как заголовок вкладки. */
  title: string;
  /** Переопределяет заголовок вкладки документа. */
  documentTitle?: string;
  /** Положение кнопки возврата; по умолчанию — слева от заголовка. */
  backButtonPosition?: BackButtonPosition;
  /** Дополнительный класс. */
  className?: string;
  /** Дополнительные инлайн-стили. */
  style?: CSSProperties;
}
