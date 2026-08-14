import { type Ref, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import type { IconButtonProps } from '@/shared/types';

import styles from './IconButton.module.scss';

/** Компонент кнопки-иконки
 * @param variant - вариант оформления кнопки
 * @param size - размер кнопки
 * @param icon - иконка кнопки
 * @param onClick - обработчик клика
 * @param loading - состояние загрузки
 * @param disabled - состояние неактивности
 * @param className - дополнительный класс
 * @param style - пользовательские стили
 * @param to - путь внутреннего маршрута
 * @param href - внешний URL
 * @param title - атрибут title кнопки
 * @param aria-label - aria-label кнопки для доступности
 * @returns {JSX.Element}
 */
export const IconButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, IconButtonProps>(
  (props, ref) => {
    const {
      variant = 'ghost',
      size = 'medium',
      icon,
      onClick,
      loading = false,
      disabled = false,
      className,
      style,
      to,
      href,
      title,
      'aria-label': ariaLabel,
      ...restProps
    } = props;

    const buttonClass = cn(
      styles.iconButton,
      styles[variant],
      styles[size],
      {
        [styles.loading]: loading,
        [styles.disabled]: disabled
      },
      className
    );

    const content = (
      <>
        { loading && <span className={ styles.spinner } /> }
        <span className={ styles.icon } aria-hidden='true'>
          { icon }
        </span>
      </>
    );

    const baseProps = {
      className: buttonClass,
      style,
      disabled: props.disabled || props.loading,
      title,
      'aria-label': ariaLabel
    };

    /** Внутренняя ссылка (React Router) */
    if (to && !href) {
      return (
        <Link
          to={ to }
          ref={ ref as Ref<HTMLAnchorElement> }
          onClick={ disabled || loading ? undefined : onClick }
          { ...baseProps }
          { ...restProps }
        >
          { content }
        </Link>
      );
    }

    /** Внешняя ссылка */
    if (href) {
      return (
        <a
          href={ href }
          ref={ ref as Ref<HTMLAnchorElement> }
          onClick={ disabled || loading ? undefined : onClick }
          rel='noopener noreferrer'
          target='_blank'
          { ...baseProps }
          { ...restProps }
        >
          { content }
        </a>
      );
    }

    /** Кнопка */
    return (
      <button
        type='button'
        ref={ ref as Ref<HTMLButtonElement> }
        onClick={ disabled || loading ? undefined : onClick }
        { ...baseProps }
        { ...restProps }
      >
        { content }
      </button>
    );
  }
);
