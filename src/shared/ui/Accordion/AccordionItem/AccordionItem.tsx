import { type FC, useCallback } from 'react';
import cn from 'classnames';

import ChevronDown from '@/assets/icons/chevron-down.svg?react';

import { AccordionBorderRadius, AccordionSize, type AccordionItemProps } from '../types';

import styles from './AccordionItem.module.scss';

/** Шеврон, поворачивающийся при раскрытии пункта */
const ChevronIcon: FC<{ isExpanded: boolean }> = ({ isExpanded }) => (
  <ChevronDown className={ cn(styles.chevron, { [styles.chevronExpanded]: isExpanded }) } />
);

/** Пункт аккордеона */
export const AccordionItem: FC<AccordionItemProps> = ({
  item,
  isExpanded,
  onToggle,
  size = AccordionSize.Medium,
  borderRadius = AccordionBorderRadius.Medium,
  collapsedIcon,
  expandedIcon,
  className
}) => {
  const handleToggle = useCallback(() => {
    if (!item.disabled) {
      onToggle();
    }
  }, [item.disabled, onToggle]);

  return (
    <div className={ cn(styles.accordionItem, styles[size], styles[borderRadius], className) }>
      <div className={ styles.header }>
        <button
          type='button'
          className={ cn(
            styles.button,
            {
              [styles.disabled]: item.disabled,
              [styles.expanded]: isExpanded
            }
          ) }
          onClick={ handleToggle }
          disabled={ item.disabled }
          aria-expanded={ isExpanded }
          aria-controls={ `accordion-content-${item.id}` }
          id={ `accordion-header-${item.id}` }
        >
          <span className={ styles.headerContent }>{ item.header }</span>
          <span className={ styles.iconWrapper }>
            { isExpanded
              ? (expandedIcon ?? <ChevronIcon isExpanded={ true } />)
              : (collapsedIcon ?? <ChevronIcon isExpanded={ false } />) }
          </span>
        </button>
      </div>
      <div
        className={ cn(
          styles.content,
          { [styles.expanded]: isExpanded, [styles.collapsed]: !isExpanded }
        ) }
        id={ `accordion-content-${item.id}` }
        role='region'
        aria-labelledby={ `accordion-header-${item.id}` }
        style={ {
          maxHeight: isExpanded ? '1000px' : '0',
          opacity: isExpanded ? 1 : 0
        } }
      >
        <div className={ styles.contentInner }>{ item.content }</div>
      </div>
    </div>
  );
};
