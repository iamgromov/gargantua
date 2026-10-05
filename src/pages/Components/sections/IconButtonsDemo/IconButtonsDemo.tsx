import { type FC } from 'react';

import { ArrowUp } from '@/assets/icons';
import { Button } from '@/shared/ui/Button';

import styles from '../../Components.module.scss';
import { ICON_BUTTON_SIZES, ICON_BUTTON_VARIANTS } from '../../constants';

export const IconButtonsDemo: FC = () => (
  <div className={ styles.column }>
    { ICON_BUTTON_SIZES.map((size) => (
      <div key={ size.value } className={ styles.row }>
        { ICON_BUTTON_VARIANTS.map((variant) => (
          <Button
            key={ `${size.value}-${variant.value}` }
            icon={ <ArrowUp /> }
            intent={ variant.value }
            size={ size.value }
            round={ true }
          />
        )) }
      </div>
    )) }
  </div>
);
