import { forwardRef } from 'react';
import cn from 'classnames';

import type { SelectProps } from '@/shared/types';

import styles from './Select.module.scss';

/** Select component
 * @param options - array of select options
 * @param value - selected value
 * @param placeholder - placeholder text
 * @param label - select label
 * @param disabled - select disabled state
 * @param loading - select loading state
 * @param error - error message
 * @param variant - select variant
 * @param size - select size
 * @param width - select width
 * @param className - select class name
 * @param style - custom styles
 * @param onChange - select change handler
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
      [styles.error]: error,
    },
    className
  );

  const wrapperClass = cn(
    styles.wrapper,
    styles[width],
    {
      [styles.disabled]: disabled,
      [styles.error]: error,
    },
    className
  );

  return (
    <div className={wrapperClass} style={style}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.selectWrapper}>
        <select
          ref={ref}
          className={selectClass}
          value={value}
          disabled={disabled || loading}
          onChange={onChange}
          {...restProps}
        >
          {placeholder && (
            <option value='' disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        {loading && <div className={styles.spinner} />}
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
});
