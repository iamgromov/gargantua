import { memo, type FC, type ReactElement } from 'react';
import cn from 'classnames';

import { PageBackgroundIntent } from '@/constants';

import { Stardust } from './Stardust/Stardust';
import { type PageBackgroundProps } from './types';

import styles from './PageBackground.module.scss';

/** Декоративный слой фона текущего маршрута */
export const PageBackground: FC<PageBackgroundProps> = memo(
  ({ intent }: PageBackgroundProps): ReactElement | null => {
    if (intent === PageBackgroundIntent.Default) {
      return null;
    }

    return (
      <div className={ cn(styles.background, styles[intent]) } aria-hidden={ true }>
        { intent === PageBackgroundIntent.Stardust && <Stardust /> }
      </div>
    );
  }
);
