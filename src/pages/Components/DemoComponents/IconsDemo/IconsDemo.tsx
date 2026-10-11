import { useState, type ChangeEvent, type FC } from 'react';
import cn from 'classnames';

import { Copy } from '@/assets/icons/tools';
import { LabelSmallRegular, Paper, PaperIntent, ScrollContainer, Select } from '@/shared/ui';

import {
  CATEGORY_OPTIONS,
  COLOR_OPTIONS,
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

  /** Копирует имя иконки в буфер обмена */
  const handleCopy = (name: string) => {
    void navigator.clipboard.writeText(name);
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
        <ul className={ cn(styles.grid, styles[color]) }>
          { icons.map(([name, Icon]) => (
            <li key={ name }>
              <Paper intent={ PaperIntent.Transparent } className={ styles.item }>
                <Icon />
                <button
                  type='button'
                  className={ styles.nameRow }
                  title='Скопировать имя'
                  onClick={ () => handleCopy(name) }
                >
                  <span className={ styles.nameWrap }>
                    <LabelSmallRegular tag='span' className={ styles.name }>{ name }</LabelSmallRegular>
                    <Copy className={ styles.copy } width={ 12 } height={ 12 } />
                  </span>
                </button>
              </Paper>
            </li>
          )) }
        </ul>
      </Paper>
    </div>
  );
};
