import { type FC } from 'react';

import { Select } from '@/shared/ui';

export const SelectDemo: FC = () => (
  <Select
    options={ [{ value: 'first', label: 'Первый вариант' }, { value: 'second', label: 'Второй вариант' }] }
    placeholder='Выберите вариант'
  />
);
