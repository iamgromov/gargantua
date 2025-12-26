import { useMemo, useState, useCallback, type ChangeEvent, type FC } from 'react';

import { Accordion } from '@/components/';
import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  SPINNERS_SIZES,
  TYPOGRAPHY_VARIANTS,
} from '@/shared/constants';
import type {
  AccordionItem,
  ButtonSize,
  ButtonVariant,
  IconButtonSize,
  IconButtonVariant,
} from '@/shared/types';
import { Button, IconButton, Select, Spinner, Typography } from '@/shared/ui';

import { ArrowUp } from '@/assets/icons';
import styles from './Home.module.scss';

const getVariantTitle = (variant: string): string => {
  return variant.charAt(0).toUpperCase() + variant.slice(1);
};

export const Home: FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<ButtonVariant>('primary');
  const [selectedSize, setSelectedSize] = useState<ButtonSize>('large');

  const handleVariantChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedVariant(event.target.value as ButtonVariant);
  }, []);

  const handleSizeChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value as ButtonSize);
  }, []);

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

  const iconsGrid = useMemo(
    () =>
      BUTTON_SIZES.map((size) => (
        <div key={size.value} className={styles.row}>
          {BUTTON_VARIANTS.map((variant) => (
            <IconButton
              key={`${size.value}-${variant.value}`}
              icon={<ArrowUp />}
              variant={variant.value as IconButtonVariant}
              size={size.value as IconButtonSize}
            />
          ))}
        </div>
      )),
    []
  );

  const spinnerGrid = useMemo(
    () => (
      <div className={styles.row}>
        {SPINNERS_SIZES.map((size) => (
          <Spinner size={size.value} />
        ))}
      </div>
    ),
    []
  );

  const ACCORDION_ITEMS = useMemo<AccordionItem[]>(
    () => [
      { header: 'Headers', content: typographyGrid, id: '1' },
      { header: 'Buttons', content: [disabledGrid, buttonsGrid], id: '2' },
      { header: 'Disabled', content: '', id: '3', disabled: true },
      { header: 'Spinners', content: spinnerGrid, id: '4' },
    ],
    [spinnerGrid, typographyGrid, disabledGrid, buttonsGrid]
  );

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

      <Typography variant='h1'>IconButtons</Typography>
      <div className={styles.row}>
        <div className={styles.column}>{iconsGrid}</div>
      </div>

      <Typography variant='h1'>Spinners</Typography>
      {spinnerGrid}
    </div>
  );
};
