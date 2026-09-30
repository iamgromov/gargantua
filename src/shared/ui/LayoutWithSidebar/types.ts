import type { ReactNode } from 'react';

export enum SidebarPosition {
  Left = 'left',
  Right = 'right'
}

export enum SidebarSize {
  Medium = 'medium',
  Large = 'large'
}

export enum SidebarMobilePosition {
  Top = 'top',
  Bottom = 'bottom',
  Hidden = 'hidden'
}

export interface LayoutWithSidebarProps {
  /** Компоненты раскладки: Content и Sidebar в любом порядке. */
  children: ReactNode;
  /** Дополнительный класс корневого элемента. */
  className?: string;
}

export interface ContentProps {
  /** Основной контент, отображаемый рядом с сайдбаром. */
  children: ReactNode;
  /** Дополнительный класс контейнера контента. */
  className?: string;
}

export interface SidebarProps {
  /** Содержимое сайдбара. */
  children: ReactNode;
  /** Сторона, с которой располагается сайдбар в десктопной раскладке. */
  position?: SidebarPosition;
  /** Ширина сайдбара. */
  size?: SidebarSize;
  /** Позиция сайдбара в одноколоночной (мобильной) раскладке. */
  mobilePosition?: SidebarMobilePosition;
  /** Прилипание сайдбара при прокрутке (только десктоп). */
  sticky?: boolean;
  /** Отступ прилипания сайдбара сверху, в пикселях. */
  topOffset?: number;
  /** Дополнительный класс контейнера сайдбара. */
  className?: string;
}
