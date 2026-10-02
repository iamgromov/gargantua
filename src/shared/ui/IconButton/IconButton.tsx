import { type Ref, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { IconButtonSize, IconButtonVariant, type IconButtonProps } from './types';

import styles from './IconButton.module.scss';

/** Круглая кнопка с иконкой, поддерживающая ссылки и состояния */
export const IconButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, IconButtonProps>(
  (props, ref) => {
    const {
      variant = IconButtonVariant.Ghost,
      size = IconButtonSize.Medium,
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
