import { type FC, useState, useCallback } from 'react';
import cn from 'classnames';

import { AccordionItem } from './AccordionItem/AccordionItem';
import { AccordionBorderRadius, AccordionSize, type AccordionProps } from './types';

import styles from './Accordion.module.scss';

/** Аккордеон со сворачиваемыми пунктами */
export const Accordion: FC<AccordionProps> = ({
  items,
  expandedIds: controlledExpandedIds,
  allowMultiple = false,
  size = AccordionSize.Medium,
  borderRadius = AccordionBorderRadius.Medium,
  onExpand,
  onCollapse,
  collapsedIcon,
  expandedIcon,
  className,
  style
}) => {
  // Внутреннее состояние для неконтролируемого режима
  const [internalExpandedIds, setInternalExpandedIds] = useState<string[]>([]);

  // Контролируемое или внутреннее состояние раскрытых пунктов
  const expandedIds = controlledExpandedIds ?? internalExpandedIds;

  const handleToggle = useCallback(
    (id: string) => {
      const isCurrentlyExpanded = expandedIds.includes(id);

      let newExpandedIds: string[];

      if (isCurrentlyExpanded) {
        // Сворачивание пункта
        newExpandedIds = expandedIds.filter((expandedId) => expandedId !== id);
        onCollapse?.(id);
      } else {
        // Раскрытие пункта
        if (allowMultiple) {
          newExpandedIds = [...expandedIds, id];
        } else {
          newExpandedIds = [id];
        }
        onExpand?.(id);
      }

      // Обновление внутреннего состояния вне контролируемого режима
      if (controlledExpandedIds === undefined) {
        setInternalExpandedIds(newExpandedIds);
      }
    },
    [expandedIds, allowMultiple, onExpand, onCollapse, controlledExpandedIds]
  );

  return (
    <div className={ cn(styles.accordion, className) } style={ style }>
      { items.map((item) => (
        <AccordionItem
          key={ item.id }
          item={ item }
          isExpanded={ expandedIds.includes(item.id) }
          onToggle={ () => handleToggle(item.id) }
          collapsedIcon={ collapsedIcon }
          expandedIcon={ expandedIcon }
          size={ size }
          borderRadius={ borderRadius }
        />
      )) }
    </div>
  );
};
