import { Children, isValidElement, type FC, type ReactElement } from 'react';
import cn from 'classnames';

import { useBreakpoint } from '@/hooks';

import { Content } from './Content';
import { Sidebar } from './Sidebar';
import { SidebarMobilePosition, SidebarPosition, SidebarSize, type LayoutWithSidebarProps, type SidebarProps } from './types';

import styles from './LayoutWithSidebar.module.scss';

/** LayoutWithSidebar component — двухколоночная раскладка с сайдбаром
 * @param children - компоненты Content и Sidebar в любом порядке
 * @param className - дополнительный класс корневого элемента
 * @returns {JSX.Element | null}
 */
export const LayoutWithSidebar: FC<LayoutWithSidebarProps> = ({ children, className }) => {
  const { isDesktop } = useBreakpoint();

  const childrenArray = Children.toArray(children);

  const content = childrenArray.find(
    (child) => isValidElement(child) && child.type === Content
  ) as ReactElement | undefined;

  const sidebar = childrenArray.find(
    (child) => isValidElement(child) && child.type === Sidebar
  ) as ReactElement<SidebarProps> | undefined;

  // Без Content раскладка не имеет содержимого
  if (!content) {
    return null;
  }

  // Одноколоночная раскладка — планшет и мобильные устройства
  if (!isDesktop) {
    const mobilePosition = sidebar?.props.mobilePosition ?? SidebarMobilePosition.Hidden;

    if (!sidebar || mobilePosition === SidebarMobilePosition.Hidden) {
      return (
        <div className={ cn(styles.layout, styles.singleColumn, className) }>
          { content }
        </div>
      );
    }

    const isSidebarFirst = mobilePosition === SidebarMobilePosition.Top;

    return (
      <div className={ cn(styles.layout, styles.singleColumn, className) }>
        { isSidebarFirst ? sidebar : content }
        { isSidebarFirst ? content : sidebar }
      </div>
    );
  }

  // Десктопная раскладка — без Sidebar контент занимает всю ширину
  if (!sidebar) {
    return (
      <div className={ cn(styles.layout, styles.singleColumn, className) }>
        { content }
      </div>
    );
  }

  const { position = SidebarPosition.Left, size = SidebarSize.Medium } = sidebar.props;
  const isSidebarRight = position === SidebarPosition.Right;

  return (
    <div className={ cn(styles.layout, styles[size], styles[position], className) }>
      { !isSidebarRight && sidebar }
      { content }
      { isSidebarRight && sidebar }
    </div>
  );
};
