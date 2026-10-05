import { type Ref, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { IconPosition, Intent, LoadingType, Size, type ButtonProps } from './types';

import styles from './Button.module.scss';

/** Кнопка с вариантами оформления, размерами, иконкой и поддержкой ссылок */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      intent = Intent.Primary,
      size = Size.Large,
      fluid = false,
      round = false,
      children,
      icon,
      iconPosition = IconPosition.Left,
      loading = false,
      loadingType = LoadingType.Default,
      disabled = false,
      type = 'button',
      title,
      'aria-label': ariaLabel,
      className,
      style,
      to,
      href,
      onClick,
      ...restProps
    } = props;

    const iconOnly = Boolean(icon) && !children;

    const buttonClass = cn(
      styles.button,
      styles[intent],
      styles[size],
      {
        [styles.fluid]: fluid,
        [styles.round]: round,
        [styles.iconOnly]: iconOnly,
        [styles.loading]: loading,
        [styles.loadingDefault]: loading && loadingType === LoadingType.Default,
        [styles.loadingWithTitle]: loading && loadingType === LoadingType.WithTitle,
        [styles.disabled]: disabled
      },
      className
    );

    const content = (
      <>
        { loading && <span className={ styles.spinner } /> }
        { icon && (
          <span
            className={ cn(
              styles.icon,
              iconPosition === IconPosition.Left ? styles.iconLeft : styles.iconRight
            ) }
            aria-hidden='true'
          >
            { icon }
          </span>
        ) }
        { children && <span className={ styles.title }>{ children }</span> }
      </>
    );

    const isInactive = disabled || loading;

    const baseProps = {
      className: buttonClass,
      style,
      disabled: isInactive,
      title,
      'aria-label': ariaLabel
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
        type={ type }
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
