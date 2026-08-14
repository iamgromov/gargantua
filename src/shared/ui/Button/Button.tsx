import { type Ref, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Intent, Size, Width, type ButtonProps } from './types';

import styles from './Button.module.scss';

/** Компонент кнопки
 * @param intent - вариант оформления кнопки
 * @param size - размер кнопки
 * @param width - ширина кнопки
 * @param children - содержимое кнопки
 * @param onClick - обработчик клика
 * @param loading - состояние загрузки
 * @param disabled - состояние неактивности
 * @param className - дополнительный класс
 * @param style - пользовательские стили
 * @param to - путь внутреннего маршрута
 * @param href - внешний URL
 * @returns {JSX.Element}
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      intent = Intent.Primary,
      size = Size.Medium,
      width = Width.Auto,
      children,
      onClick,
      loading = false,
      disabled = false,
      className,
      style,
      to,
      href,
      ...restProps
    } = props;

    const buttonClass = cn(
      styles.button,
      styles[intent],
      styles[size],
      styles[width],
      {
        [styles.loading]: loading,
        [styles.disabled]: disabled
      },
      className
    );

    const content = (
      <>
        { loading && <span className={ styles.spinner } /> }
        { children && <span className={ styles.title }>{ children }</span> }
      </>
    );

    const baseProps = {
      className: buttonClass,
      style,
      disabled: props.disabled || props.loading
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
