import { type Ref, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import type { IconButtonProps } from '@/shared/types';

import styles from './IconButton.module.scss';

/** IconButton component
 * @param variant - button variant
 * @param size - button size
 * @param icon - button icon
 * @param onClick - button click handler
 * @param loading - button loading state
 * @param disabled - button disabled state
 * @param className - button class name
 * @param style - custom styles
 * @param to - internal route path
 * @param href - external URL
 * @param title - button title attribute
 * @param aria-label - button aria-label for accessibility
 * @returns {JSX.Element}
 */
export const IconButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, IconButtonProps>(
  (props, ref) => {
    const {
      variant = 'ghost',
      size = 'small',
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
        [styles.disabled]: disabled,
      },
      className
    );

    const content = (
      <>
        {loading && <span className={styles.spinner} />}
        <span className={styles.icon} aria-hidden='true'>
          {icon}
        </span>
      </>
    );

    const baseProps = {
      className: buttonClass,
      style,
      disabled: props.disabled || props.loading,
      title,
      'aria-label': ariaLabel,
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
