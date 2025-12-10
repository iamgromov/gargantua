import { type FC, useState, useCallback } from 'react';
import cn from 'classnames';

import type { AccordionProps } from 'shared/types';
import { AccordionItem } from 'shared/ui';

import styles from './Accordion.module.scss';

/** Accordion component
 * @param items - array of accordion items
 * @param expandedIds - currently expanded item IDs (controlled)
 * @param allowMultiple - whether multiple items can be expanded simultaneously
 * @param className - custom class name
 * @param style - custom styles
 * @param onExpand - called when an item is expanded
 * @param onCollapse - called when an item is collapsed
 * @param collapsedIcon - icon to display when item is collapsed
 * @param expandedIcon - icon to display when item is expanded
 * @param size - size of the accordion items
 * @param borderRadius - border radius variant
 * @returns {JSX.Element}
 */
export const Accordion: FC<AccordionProps> = ({
  items,
  expandedIds: controlledExpandedIds,
  allowMultiple = false,
  className,
  style,
  onExpand,
  onCollapse,
  collapsedIcon,
  expandedIcon,
  size = 'medium',
  borderRadius = 'medium',
}) => {
  // Internal state for uncontrolled mode
  const [internalExpandedIds, setInternalExpandedIds] = useState<string[]>([]);

  // Use controlled or internal state
  const expandedIds = controlledExpandedIds ?? internalExpandedIds;

  const handleToggle = useCallback(
    (id: string) => {
      const isCurrentlyExpanded = expandedIds.includes(id);

      let newExpandedIds: string[];

      if (isCurrentlyExpanded) {
        // Collapse item
        newExpandedIds = expandedIds.filter((expandedId) => expandedId !== id);
        onCollapse?.(id);
      } else {
        // Expand item
        if (allowMultiple) {
          newExpandedIds = [...expandedIds, id];
        } else {
          newExpandedIds = [id];
        }
        onExpand?.(id);
      }

      // Update internal state if not controlled
      if (controlledExpandedIds === undefined) {
        setInternalExpandedIds(newExpandedIds);
      }
    },
    [expandedIds, allowMultiple, onExpand, onCollapse, controlledExpandedIds]
  );

  return (
    <div className={cn(styles.accordion, className)} style={style}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isExpanded={expandedIds.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
          collapsedIcon={collapsedIcon}
          expandedIcon={expandedIcon}
          size={size}
          borderRadius={borderRadius}
        />
      ))}
    </div>
  );
};
