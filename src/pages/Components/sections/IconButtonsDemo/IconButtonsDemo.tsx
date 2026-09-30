import { type FC } from 'react';

import { ArrowUp } from '@/assets/icons';
import { IconButton } from '@/shared/ui';

import styles from '../../Components.module.scss';
import { ICON_BUTTON_SIZES, ICON_BUTTON_VARIANTS } from '../../constants';

export const IconButtonsDemo: FC = () => (
  <div className={ styles.column }>
    { ICON_BUTTON_SIZES.map((size) => (
      <div key={ size.value } className={ styles.row }>
        { ICON_BUTTON_VARIANTS.map((variant) => (
          <IconButton
            key={ `${size.value}-${variant.value}` }
            icon={ <ArrowUp /> }
            variant={ variant.value }
            size={ size.value }
          />
        )) }
      </div>
    )) }
  </div>
);
