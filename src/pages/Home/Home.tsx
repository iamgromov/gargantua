import { useMemo, useState, type ChangeEvent, type FC } from 'react';

import { Accordion } from '@/components/';
import { BUTTON_SIZES, BUTTON_VARIANTS, TYPOGRAPHY_VARIANTS } from '@/shared/constants';
import type { AccordionItem, ButtonSize, ButtonVariant } from '@/shared/types';
import { Button, Select, Typography } from '@/shared/ui';

import styles from './Home.module.scss';

const getVariantTitle = (variant: string): string => {
  return variant.charAt(0).toUpperCase() + variant.slice(1);
};

export const Home: FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<ButtonVariant>('primary');
  const [selectedSize, setSelectedSize] = useState<ButtonSize>('large');

  const handleVariantChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedVariant(event.target.value as ButtonVariant);
  };

  const handleSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value as ButtonSize);
  };

  const typographyGrid = useMemo(
    () => (
      <div className={styles.row}>
        {TYPOGRAPHY_VARIANTS.map((variant) => (
          <Typography variant={variant} key={variant}>
            Headline
          </Typography>
        ))}
      </div>
    ),
    []
  );

  const disabledGrid = useMemo(
    () => (
      <div className={styles.row}>
        <Button variant='success' size='large' loading={true}>
          Success
        </Button>
        <Button variant='success' size='large' disabled={true}>
          Success
        </Button>
      </div>
    ),
    []
  );

  const buttonsGrid = useMemo(
    () =>
      BUTTON_SIZES.map((size) => (
        <div key={size.value} className={styles.row}>
          {BUTTON_VARIANTS.map((variant) => (
            <Button
              key={`${size.value}-${variant.value}`}
              variant={variant.value}
              size={size.value}
            >
              {variant.label}
            </Button>
          ))}
        </div>
      )),
    []
  );

  const ACCORDION_ITEMS: AccordionItem[] = [
    { header: 'Headers', content: typographyGrid, id: '1' },
    { header: 'Buttons', content: [disabledGrid, buttonsGrid], id: '2' },
    { header: 'Disabled', content: '', id: '3', disabled: true },
  ];

  return (
    <div className={styles.main}>
      <Typography variant='h1'>Accordion</Typography>
      <div className={styles.row}>
        <Accordion size='large' items={ACCORDION_ITEMS}></Accordion>
      </div>

      <Typography variant='h1'>Select</Typography>
      <div className={styles.row}>
        <Select
          options={BUTTON_VARIANTS}
          value={selectedVariant}
          placeholder='Variant'
          onChange={handleVariantChange}
        />
        <Select
          options={BUTTON_SIZES}
          value={selectedSize}
          placeholder='Size'
          onChange={handleSizeChange}
        />
        <Button variant={selectedVariant} size={selectedSize}>
          {getVariantTitle(selectedVariant)}
        </Button>
      </div>

      <Typography variant='h1'>Headers</Typography>
      {typographyGrid}

      <Typography variant='h1'>Buttons</Typography>
      <div className={styles.row}>
        <div className={styles.column}>
          {disabledGrid}
          {buttonsGrid}
        </div>
      </div>
    </div>
  );
};
