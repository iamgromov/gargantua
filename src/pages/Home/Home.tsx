import { useMemo, type FC } from 'react';

import { Accordion } from 'components/index';
import type { AccordionItem, ButtonSize, ButtonVariant } from 'shared/types';
import type { TypographyVariant } from 'shared/types/typography.interfaces';
import { Button, Typography } from 'shared/ui';

import styles from './Home.module.scss';

const BUTTON_SIZES: ButtonSize[] = ['extra-large', 'large', 'medium', 'small'];
const BUTTON_VARIANTS: ButtonVariant[] = [
  'primary',
  'secondary',
  'outline',
  'danger',
  'success',
  'ghost',
  'link',
];
const TYPOGRAPHY_VARIANTS: TypographyVariant[] = ['t30b', 't24b', 't18b', 't16', 't14', 't12'];

const getVariantTitle = (variant: string): string => {
  return variant.charAt(0).toUpperCase() + variant.slice(1);
};

export const Home: FC = () => {
  const typographyGrid = useMemo(
    () => (
      <div className={styles.row}>
        {TYPOGRAPHY_VARIANTS.map((variant) => (
          <Typography variant={variant} key={variant}>
            Some text
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
        <div key={size} className={styles.row}>
          {BUTTON_VARIANTS.map((variant) => (
            <Button key={`${size}-${variant}`} variant={variant} size={size}>
              {getVariantTitle(variant)}
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
      <Typography variant='t30b'>Accordion</Typography>
      <div className={styles.row}>
        <Accordion size='large' items={ACCORDION_ITEMS}></Accordion>
      </div>

      <Typography variant='t30b'>Headers</Typography>
      {typographyGrid}

      <Typography variant='t30b'>Buttons</Typography>
      {disabledGrid}
      {buttonsGrid}
    </div>
  );
};
