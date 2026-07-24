import React, { type ReactNode } from 'react';

export interface AccordionItem {
  id: string;
  header: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  expandedIds?: string[];
  allowMultiple?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onExpand?: (_id: string) => void;
  onCollapse?: (_id: string) => void;
  collapsedIcon?: ReactNode;
  expandedIcon?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  borderRadius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}

export interface AccordionItemProps {
  item: AccordionItem;
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
  collapsedIcon?: ReactNode;
  expandedIcon?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  borderRadius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}
