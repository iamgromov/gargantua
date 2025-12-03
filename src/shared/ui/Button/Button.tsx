import { type Ref, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './Button.module.scss';

import type { ButtonProps } from './types';

/** Button component
 * @param variant - button variant
 * @param size - button size
 * @param width - button width
 * @param children - button content
 * @param onClick - button click handler
 * @param loading - button loading state
 * @param disabled - button disabled state
 * @param className - button class name
 * @param style - custom styles
 * @param to - internal route path
 * @param href - external URL
 * @returns {JSX.Element}
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = 'primary',
      size = 'medium',
      width = 'auto',
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
      styles[variant],
      styles[size],
      styles[width],
      {
        [styles.loading]: loading,
        [styles.disabled]: disabled,
      },
      className
    );

    const content = (
      <>
        {loading && <span className={styles.spinner} />}
        {children && <span className={styles.title}>{children}</span>}
      </>
    );

    const baseProps = {
      className: buttonClass,
      style,
      disabled: props.disabled || props.loading,
    };

    /** Router Link */
    if (to && !href) {
      return (
        <Link
          to={to}
          ref={ref as Ref<HTMLAnchorElement>}
          onClick={disabled || loading ? undefined : onClick}
          {...baseProps}
          {...restProps}
        >
          {content}
        </Link>
      );
    }

    /** External Link */
    if (href) {
      return (
        <a
          href={href}
          ref={ref as Ref<HTMLAnchorElement>}
          onClick={disabled || loading ? undefined : onClick}
          rel='noopener noreferrer'
          target='_blank'
          {...baseProps}
          {...restProps}
        >
          {content}
        </a>
      );
    }

    /** Button */
    return (
      <button
        type='button'
        ref={ref as Ref<HTMLButtonElement>}
        onClick={disabled || loading ? undefined : onClick}
        {...baseProps}
        {...restProps}
      >
        {content}
      </button>
    );
  }
);
