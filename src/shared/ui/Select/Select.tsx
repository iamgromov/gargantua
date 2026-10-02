import { forwardRef, useId } from 'react';
import cn from 'classnames';

import { SelectSize, SelectVariant, SelectWidth, type SelectProps } from './types';

import styles from './Select.module.scss';

/** Выпадающий список с подписью, состояниями загрузки и ошибки */
export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {
    options,
    value,
    placeholder,
    label,
    disabled = false,
    loading = false,
    error,
    variant = SelectVariant.Default,
    size = SelectSize.Large,
    width = SelectWidth.Auto,
    className,
    style,
    onChange,
    ...restProps
  } = props;

  const selectId = useId();

  const selectClass = cn(
    styles.select,
    styles[variant],
    styles[size],
    styles[width],
    {
      [styles.disabled]: disabled,
      [styles.loading]: loading,
      [styles.error]: error
    }
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
      { label && (
        <label className={ styles.label } htmlFor={ selectId }>
          { label }
        </label>
      ) }
      <div className={ styles.selectWrapper }>
        <select
          ref={ ref }
          id={ selectId }
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
