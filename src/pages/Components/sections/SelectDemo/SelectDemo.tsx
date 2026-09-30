import { useCallback, useState, type ChangeEvent, type FC } from 'react';

import { Select } from '@/shared/ui';
import { Button, Intent, Size } from '@/shared/ui/Button';

import styles from '../../Components.module.scss';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '../../constants';

export const SelectDemo: FC = () => {
  const [variant, setVariant] = useState(Intent.Primary);
  const [size, setSize] = useState(Size.Large);

  const handleVariantChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setVariant(event.target.value as Intent);
  }, []);

  const handleSizeChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setSize(event.target.value as Size);
  }, []);

  const variantLabel = BUTTON_VARIANTS.find((option) => option.value === variant)?.label;

  return (
    <div className={ styles.row }>
      <Select
        options={ BUTTON_VARIANTS }
        value={ variant }
        placeholder='Variant'
        onChange={ handleVariantChange }
      />
      <Select
        options={ BUTTON_SIZES }
        value={ size }
        placeholder='Size'
        onChange={ handleSizeChange }
      />
      <Button intent={ variant } size={ size }>
        { variantLabel }
      </Button>
    </div>
  );
};
