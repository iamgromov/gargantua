import { memo, type FC, type ReactElement } from 'react';

import { useStardustDots } from '../hooks';
import { type StardustDot } from '../types';

import styles from '../PageBackground.module.scss';

/** Поле мерцающих частиц — слой фона «космическая пыль» */
export const Stardust: FC = memo((): ReactElement => {
  const dots = useStardustDots();

  return (
    <div className={ styles.stardustField }>
      { dots.map((dot: StardustDot) => (
        <span
          key={ dot.id }
          className={ styles.stardustDot }
          style={ dot.style }
        />
      )) }
    </div>
  );
});
