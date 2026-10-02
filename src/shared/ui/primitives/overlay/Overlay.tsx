import { type FC } from 'react';
import cn from 'classnames';

import { type OverlayProps } from './types';

import styles from './Overlay.module.scss';

/** Единая затемняющая подложка для всех оверлеев */
export const Overlay: FC<OverlayProps> = ({ onClick, className, style }) => (
  <div
    className={ cn(styles.overlay, className) }
    style={ style }
    onClick={ onClick }
    aria-hidden='true'
  />
);
