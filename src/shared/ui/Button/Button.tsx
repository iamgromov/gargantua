import { type Ref, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Intent, Size, Width, type ButtonProps } from './types';

import styles from './Button.module.scss';

/** Кнопка с вариантами оформления, размерами и поддержкой ссылок */
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

    const isInactive = disabled || loading;

    const baseProps = {
      className: buttonClass,
      style,
      disabled: isInactive
    };

    /** Внутренняя ссылка (React Router) */
    if (to && !href) {
      return (
        <Link
          to={ to }
          ref={ ref as Ref<HTMLAnchorElement> }
          onClick={ isInactive ? undefined : onClick }
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
          onClick={ isInactive ? undefined : onClick }
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
        onClick={ isInactive ? undefined : onClick }
        { ...baseProps }
        { ...restProps }
      >
        { content }
      </button>
    );
  }
);
