import { type FC } from 'react';
import cn from 'classnames';

import type { OverlayProps } from './types';

import styles from './Overlay.module.scss';

/**
 * Overlay — единая затемняющая подложка для всех оверлеев проекта (шторки, модалки, drawer и т.д.)
 */
export const Overlay: FC<OverlayProps> = ({ onClick, className, style }) => (
  <div
    className={ cn(styles.overlay, className) }
    style={ style }
    onClick={ onClick }
    aria-hidden='true'
  />
);
