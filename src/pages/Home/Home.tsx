import { useMemo, type FC } from 'react';

import type { ButtonSize, ButtonVariant } from 'shared/types';
import { Button, Typography } from 'shared/ui';

import styles from './Home.module.scss';

const SIZES: ButtonSize[] = ['extra-large', 'large', 'medium', 'small'];
const VARIANTS: ButtonVariant[] = ['primary', 'outline', 'danger', 'success', 'ghost', 'link'];

const getVariantTitle = (variant: string): string => {
  return variant.charAt(0).toUpperCase() + variant.slice(1);
};

export const Home: FC = () => {
  const buttonsGrid = useMemo(
    () =>
      SIZES.map((size) => (
        <div key={size} className={styles.row}>
          {VARIANTS.map((variant) => (
            <Button key={`${size}-${variant}`} variant={variant} size={size}>
              {getVariantTitle(variant)}
            </Button>
          ))}
        </div>
      )),
    []
  );

  return (
    <div className={styles.main}>
      <Typography variant='t30b'>Typography</Typography>
      <div className={styles.row}>
        <Typography variant='t30b'>Some text</Typography>
        <Typography variant='t24b'>Some text</Typography>
        <Typography variant='t18b'>Some text</Typography>
        <Typography variant='t14_130'>Some text</Typography>
        <Typography variant='t14'>Some text</Typography>
        <Typography variant='t10'>Some text</Typography>
      </div>

      <Typography variant='t30b'>Buttons</Typography>
      <div className={styles.row}>
        <Button variant='success' size='large' loading={true}>
          Success
        </Button>
        <Button variant='success' size='large' disabled={true}>
          Success
        </Button>
      </div>

      {buttonsGrid}
    </div>
  );
};
