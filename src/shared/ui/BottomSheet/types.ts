import type { CSSProperties, ReactNode } from 'react';

export enum BottomSheetTitleAlign {
  Left = 'left',
  Center = 'center'
}

export interface BottomSheetProps {
  /** Управляет видимостью компонента. */
  open: boolean;
  /** Вызывается при закрытии (клик по подложке или Escape). */
  onClose: () => void;
  /** Заголовок шторки. При `showHandle` в шапке не выводится — текст остаётся в скрытом `h2` для `aria-labelledby`. */
  title?: ReactNode;
  /** Выравнивание заголовка: по левому краю или по центру. */
  titleAlign?: BottomSheetTitleAlign;
  /** Чёрточка по центру шапки: шторку можно тянуть за неё и за заголовок. */
  showHandle?: boolean;
  /** Круглая кнопка закрытия в правом верхнем углу панели. Показывается независимо от того, что выведено в шапке. */
  showClose?: boolean;
  /** Произвольный контент внутри шторки. */
  children?: ReactNode;
  /** Закрывать ли при клике по подложке. */
  closeOnBackdrop?: boolean;
  /** Закрывать ли по нажатию Escape. */
  closeOnEscape?: boolean;
  /** Дополнительный класс для панели шторки. */
  className?: string;
  /** Дополнительные стили для панели шторки. */
  style?: CSSProperties;
}

/** Пропсы содержимого шторки: всё, кроме управления видимостью и закрытием по Escape. */
export type BottomSheetContentProps = Omit<BottomSheetProps, 'open' | 'closeOnEscape'>;
