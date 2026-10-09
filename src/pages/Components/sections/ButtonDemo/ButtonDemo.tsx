import { useState, type ChangeEvent, type FC } from 'react';

import { Paper, PaperIntent, ScrollContainer, Select } from '@/shared/ui';
import { Button, IconPosition, Intent, LoadingType, Size } from '@/shared/ui/Button';

import {
  BOOLEAN_OPTIONS,
  ICONS,
  ICON_OPTIONS,
  ICON_POSITION_OPTIONS,
  IconValue,
  INTENT_OPTIONS,
  LABEL_OPTIONS,
  LOADING_TYPE_OPTIONS,
  SIZE_OPTIONS
} from './constants';

import styles from './ButtonDemo.module.scss';

export const ButtonDemo: FC = () => {
  const [intent, setIntent] = useState<Intent>(Intent.Primary);
  const [size, setSize] = useState<Size>(Size.Large);
  const [icon, setIcon] = useState<IconValue>(IconValue.Menu);
  const [iconPosition, setIconPosition] = useState<IconPosition>(IconPosition.Left);
  const [label, setLabel] = useState<string>('Кнопка');
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingType, setLoadingType] = useState<LoadingType>(LoadingType.Default);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [fluid, setFluid] = useState<boolean>(false);
  const [round, setRound] = useState<boolean>(false);

  /** Кнопка только с иконкой — условие для круглой формы */
  const isIconOnly = icon !== IconValue.None && label === '';

  /** Смена текста: уход из режима «только иконка» сбрасывает круглую форму */
  const handleLabelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLabel(event.target.value);

    if (event.target.value) {
      setRound(false);
    }
  };

  /** Клик по кнопке для демонстрации обработчика */
  const handleClick = () => console.log('click');

  return (
    <div className={ styles.column }>
      <ScrollContainer>
        <Select
          label='Вариант'
          options={ INTENT_OPTIONS }
          value={ intent }
          onChange={ (event) => setIntent(event.target.value as Intent) }
        />
        <Select
          label='Размер'
          options={ SIZE_OPTIONS }
          value={ size }
          onChange={ (event) => setSize(event.target.value as Size) }
        />
        <Select
          label='Загрузка'
          options={ BOOLEAN_OPTIONS }
          value={ String(loading) }
          onChange={ (event) => setLoading(event.target.value === 'true') }
        />
        <Select
          label='Тип загрузки'
          options={ LOADING_TYPE_OPTIONS }
          value={ loadingType }
          onChange={ (event) => setLoadingType(event.target.value as LoadingType) }
        />
        <Select
          label='Неактивна'
          options={ BOOLEAN_OPTIONS }
          value={ String(disabled) }
          onChange={ (event) => setDisabled(event.target.value === 'true') }
        />
        <Select
          label='На всю ширину'
          options={ BOOLEAN_OPTIONS }
          value={ String(fluid) }
          onChange={ (event) => setFluid(event.target.value === 'true') }
        />
      </ScrollContainer>
      <ScrollContainer>
        <Select
          label='Иконка'
          options={ ICON_OPTIONS }
          value={ icon }
          onChange={ (event) => setIcon(event.target.value as IconValue) }
          disabled={ label === '' }
        />
        <Select
          label='Позиция иконки'
          options={ ICON_POSITION_OPTIONS }
          value={ iconPosition }
          disabled={ icon === IconValue.None || label === '' }
          onChange={ (event) => setIconPosition(event.target.value as IconPosition) }
        />
        <Select
          label='Текст'
          options={ LABEL_OPTIONS }
          value={ label }
          disabled={ icon === IconValue.None }
          onChange={ handleLabelChange }
        />
        <Select
          label='Круглая'
          options={ BOOLEAN_OPTIONS }
          value={ String(round) }
          disabled={ !isIconOnly }
          onChange={ (event) => setRound(event.target.value === 'true') }
        />
      </ScrollContainer>
      <Paper intent={ PaperIntent.Transparent } className={ styles.preview }>
        <Button
          intent={ intent }
          size={ size }
          icon={ ICONS[icon] }
          iconPosition={ iconPosition }
          loading={ loading }
          loadingType={ loadingType }
          disabled={ disabled }
          fluid={ fluid }
          round={ round }
          onClick={ handleClick }
        >
          { label || undefined }
        </Button>
      </Paper>
    </div>
  );
};
