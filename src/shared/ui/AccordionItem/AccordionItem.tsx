import { type FC, useCallback } from 'react';
import cn from 'classnames';

import type { AccordionItemProps } from '@/shared/types';

import ChevronDown from '@/assets/icons/chevron-down.svg?react';
import styles from './AccordionItem.module.scss';

/** Chevron icon component */
const ChevronIcon: FC<{ isExpanded: boolean }> = ({ isExpanded }) => (
  <ChevronDown
    style={{
      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 200ms ease-in-out',
    }}
  />
);

/** Accordion item component
 * @param item - accordion item data
 * @param isExpanded - whether the item is currently expanded
 * @param onToggle - toggle function
 * @param className - custom class name
 * @param collapsedIcon - icon to display when item is collapsed
 * @param expandedIcon - icon to display when item is expanded
 * @param size - size of the accordion item
 * @param borderRadius - border radius variant
 * @returns {JSX.Element}
 */
export const AccordionItem: FC<AccordionItemProps> = ({
  item,
  isExpanded,
  onToggle,
  className,
  collapsedIcon,
  expandedIcon,
  size = 'medium',
  borderRadius = 'medium',
}) => {
  const handleToggle = useCallback(() => {
    if (!item.disabled) {
      onToggle();
    }
  }, [item.disabled, onToggle]);

  const itemClass = styles.accordionItem;
  const headerClass = styles.header;
  const contentClass = styles.content;
  const buttonClass = styles.button;

  return (
    <div className={cn(itemClass, styles[size], styles[borderRadius], className)}>
      <div className={headerClass}>
        <button
          type='button'
          className={cn(
            buttonClass,
            item.disabled ? styles.disabled : '',
            isExpanded ? styles.expanded : ''
          )}
          onClick={handleToggle}
          disabled={item.disabled}
          aria-expanded={isExpanded}
          aria-controls={`accordion-content-${item.id}`}
          id={`accordion-header-${item.id}`}
        >
          <span className={styles.headerContent}>{item.header}</span>
          <span className={styles.iconWrapper}>
            {isExpanded
              ? (expandedIcon ?? <ChevronIcon isExpanded={true} />)
              : (collapsedIcon ?? <ChevronIcon isExpanded={false} />)}
          </span>
        </button>
      </div>
      <div
        className={cn(contentClass, isExpanded ? styles.expanded : styles.collapsed)}
        id={`accordion-content-${item.id}`}
        role='region'
        aria-labelledby={`accordion-header-${item.id}`}
        style={{
          maxHeight: isExpanded ? '1000px' : '0',
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div className={styles.contentInner}>{item.content}</div>
      </div>
    </div>
  );
};
