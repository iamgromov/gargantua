import { type FC } from 'react';
import cn from 'classnames';

import { useBreakpoint } from '@/hooks';

import type { SidebarProps } from './types';

import styles from './LayoutWithSidebar.module.scss';

/** Контейнер сайдбара раскладки */
export const Sidebar: FC<SidebarProps> = ({ children, sticky = false, topOffset = 0, className }) => {
  const { isDesktop } = useBreakpoint();
  const isSticky = sticky && isDesktop;

  return (
    <div
      className={ cn(styles.sidebar, isSticky && styles.sticky, className) }
      style={ isSticky ? { top: topOffset } : undefined }
    >
      { children }
    </div>
  );
};
