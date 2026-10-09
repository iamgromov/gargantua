import type { CSSProperties, ReactNode } from 'react';

export enum DrawerSide {
  Left = 'left',
  Right = 'right'
}

export enum DrawerTitleAlign {
  Left = 'left',
  Center = 'center'
}

export interface DrawerProps {
  /** Управляет видимостью панели. */
  open: boolean;
  /** Вызывается при закрытии (клик по подложке или Escape). */
  onClose: () => void;
  /** Заголовок панели. При отсутствии выводится в скрытом `h2` как «Drawer» для `aria-labelledby`. */
  title?: ReactNode;
  /** Выравнивание заголовка: по левому краю или по центру. */
  titleAlign?: DrawerTitleAlign;
  /** Круглая кнопка закрытия в правом верхнем углу панели. Показывается независимо от того, что выведено в шапке. */
  showClose?: boolean;
  /** Произвольный контент внутри панели. */
  children?: ReactNode;
  /** Сторона, с которой выезжает панель. */
  side?: DrawerSide;
  /** Закрывать ли при клике по подложке. */
  closeOnBackdrop?: boolean;
  /** Закрывать ли по нажатию Escape. */
  closeOnEscape?: boolean;
  /** Дополнительный класс для панели. */
  className?: string;
  /** Дополнительные стили для панели. */
  style?: CSSProperties;
}
