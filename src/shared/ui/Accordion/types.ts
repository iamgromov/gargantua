import type { CSSProperties, ReactNode } from 'react';

export enum AccordionSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum AccordionBorderRadius {
  None = 'none',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Full = 'full'
}

export interface AccordionItem {
  /** Уникальный идентификатор пункта. */
  id: string;
  /** Заголовок пункта. */
  header: ReactNode;
  /** Содержимое пункта. */
  content: ReactNode;
  /** Недоступность пункта. */
  disabled?: boolean;
}

export interface AccordionProps {
  /** Массив пунктов аккордеона. */
  items: AccordionItem[];
  /** Идентификаторы раскрытых пунктов (контролируемый режим). */
  expandedIds?: string[];
  /** Разрешать ли раскрытие нескольких пунктов одновременно. */
  allowMultiple?: boolean;
  /** Размер пунктов. */
  size?: AccordionSize;
  /** Вариант скругления углов. */
  borderRadius?: AccordionBorderRadius;
  /** Вызывается при раскрытии пункта. */
  onExpand?: (_id: string) => void;
  /** Вызывается при сворачивании пункта. */
  onCollapse?: (_id: string) => void;
  /** Иконка свёрнутого пункта. */
  collapsedIcon?: ReactNode;
  /** Иконка раскрытого пункта. */
  expandedIcon?: ReactNode;
  /** Дополнительный класс. */
  className?: string;
  /** Дополнительные инлайн-стили. */
  style?: CSSProperties;
}

export interface AccordionItemProps {
  /** Данные пункта аккордеона. */
  item: AccordionItem;
  /** Раскрыт ли пункт сейчас. */
  isExpanded: boolean;
  /** Переключает состояние пункта. */
  onToggle: () => void;
  /** Размер пункта. */
  size?: AccordionSize;
  /** Вариант скругления углов. */
  borderRadius?: AccordionBorderRadius;
  /** Иконка свёрнутого пункта. */
  collapsedIcon?: ReactNode;
  /** Иконка раскрытого пункта. */
  expandedIcon?: ReactNode;
  /** Дополнительный класс. */
  className?: string;
}
