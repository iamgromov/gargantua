import { type FC } from 'react';
import cn from 'classnames';

import { useBreakpoint } from '@/hooks';

import type { SidebarProps } from './types';

import styles from './LayoutWithSidebar.module.scss';

/** Sidebar component — контейнер сайдбара раскладки
 * @param children - содержимое сайдбара
 * @param sticky - прилипание сайдбара при прокрутке (только десктоп)
 * @param topOffset - отступ прилипания сайдбара сверху, в пикселях
 * @param className - дополнительный класс контейнера
 * @returns {JSX.Element}
 */
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
