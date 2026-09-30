import { type FC } from 'react';

import { Button, Intent, Size } from '@/shared/ui/Button';

import styles from '../../Components.module.scss';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '../../constants';

export const ButtonsDemo: FC = () => (
  <div className={ styles.column }>
    <div className={ styles.row }>
      <Button intent={ Intent.Success } size={ Size.Large } loading={ true }>
        Success
      </Button>
      <Button intent={ Intent.Success } size={ Size.Large } disabled={ true }>
        Success
      </Button>
    </div>

    { BUTTON_SIZES.map((size) => (
      <div key={ size.value } className={ styles.row }>
        { BUTTON_VARIANTS.map((variant) => (
          <Button key={ `${size.value}-${variant.value}` } intent={ variant.value } size={ size.value }>
            { variant.label }
          </Button>
        )) }
      </div>
    )) }
  </div>
);
