import { type FC } from 'react';
import cn from 'classnames';

import { Button } from '../Button';
import { Typography, TypographyVariant } from '../Typography';

import { type EmptyStateProps } from './types';

import styles from './EmptyState.module.scss';

/** Экран пустого состояния с изображением, текстом и действиями */
export const EmptyState: FC<EmptyStateProps> = ({
  title,
  subtitle,
  image,
  imageAlt = '',
  buttons,
  className,
  style
}) => (
  <div className={ cn(styles.root, className) } style={ style }>
    { image && <img className={ styles.image } src={ image } alt={ imageAlt } /> }

    <div className={ styles.title }>
      <Typography variant={ TypographyVariant.H4 }>{ title }</Typography>
      { subtitle && <p className={ styles.subtitle }>{ subtitle }</p> }
    </div>

    { buttons && buttons.length > 0 && (
      <div className={ styles.controls }>
        { buttons.map(({ key, ...button }) => (
          <Button key={ key } { ...button } />
        )) }
      </div>
    ) }
  </div>
);
