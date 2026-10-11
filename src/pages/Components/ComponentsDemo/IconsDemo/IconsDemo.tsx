import { useState, type ChangeEvent, type FC } from 'react';

import { LabelSmallRegular, Paper, PaperIntent, ScrollContainer, Select } from '@/shared/ui';

import {
  CATEGORY_OPTIONS,
  COLOR_OPTIONS,
  COLOR_TOKENS,
  DEFAULT_CATEGORY,
  getCategoryIcons,
  IconColor,
  type IconCategory
} from './constants';

import styles from './IconsDemo.module.scss';

export const IconsDemo: FC = () => {
  const [category, setCategory] = useState<IconCategory>(DEFAULT_CATEGORY);
  const [color, setColor] = useState<IconColor>(IconColor.Primary);

  const icons = getCategoryIcons(category);

  /** Смена категории иконок */
  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as IconCategory);
  };

  /** Смена цвета иконок */
  const handleColorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value as IconColor);
  };

  return (
    <div className={ styles.column }>
      <ScrollContainer>
        <Select
          label='Категория'
          options={ CATEGORY_OPTIONS }
          value={ category }
          onChange={ handleCategoryChange }
        />
        <Select
          label='Цвет'
          options={ COLOR_OPTIONS }
          value={ color }
          onChange={ handleColorChange }
        />
      </ScrollContainer>
      <Paper intent={ PaperIntent.Transparent } className={ styles.preview }>
        <LabelSmallRegular className={ styles.counter }>
          Иконок в категории: { icons.length }
        </LabelSmallRegular>
        <ul className={ styles.grid } style={ { color: COLOR_TOKENS[color] } }>
          { icons.map(([name, Icon]) => (
            <li key={ name } className={ styles.item }>
              <span className={ styles.icon }>
                <Icon />
              </span>
              <LabelSmallRegular tag='span' className={ styles.name }>{ name }</LabelSmallRegular>
            </li>
          )) }
        </ul>
      </Paper>
    </div>
  );
};
