import { forwardRef } from 'react';
import cn from 'classnames';

import type { SelectProps } from '@/shared/types';

import styles from './Select.module.scss';

/** Компонент выпадающего списка
 * @param options - массив вариантов выбора
 * @param value - выбранное значение
 * @param placeholder - текст подсказки
 * @param label - подпись списка
 * @param disabled - состояние неактивности
 * @param loading - состояние загрузки
 * @param error - сообщение об ошибке
 * @param variant - вариант оформления
 * @param size - размер списка
 * @param width - ширина списка
 * @param className - дополнительный класс
 * @param style - пользовательские стили
 * @param onChange - обработчик изменения выбора
 * @returns {JSX.Element}
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {
    options,
    value,
    placeholder,
    label,
    disabled = false,
    loading = false,
    error,
    variant = 'default',
    size = 'large',
    width = 'auto',
    className,
    style,
    onChange,
    ...restProps
  } = props;

  const selectClass = cn(
    styles.select,
    styles[variant],
    styles[size],
    styles[width],
    {
      [styles.disabled]: disabled,
      [styles.loading]: loading,
      [styles.error]: error
    },
    className
  );

  const wrapperClass = cn(
    styles.wrapper,
    styles[width],
    {
      [styles.disabled]: disabled,
      [styles.error]: error
    },
    className
  );

  return (
    <div className={ wrapperClass } style={ style }>
      { label && <label className={ styles.label }>{ label }</label> }
      <div className={ styles.selectWrapper }>
        <select
          ref={ ref }
          className={ selectClass }
          value={ value }
          disabled={ disabled || loading }
          onChange={ onChange }
          { ...restProps }
        >
          { placeholder && (
            <option value='' disabled>
              { placeholder }
            </option>
          ) }
          { options.map((option) => (
            <option key={ option.value } value={ option.value } disabled={ option.disabled }>
              { option.label }
            </option>
          )) }
        </select>
        { loading && <div className={ styles.spinner } /> }
      </div>
      { error && <span className={ styles.errorMessage }>{ error }</span> }
    </div>
  );
});
