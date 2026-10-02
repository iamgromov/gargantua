import { type FC, useMemo } from 'react';

import { Accordion, AccordionSize, type AccordionItem } from '@/shared/ui/Accordion';
import { Button, Intent, Size } from '@/shared/ui/Button';

export const AccordionDemo: FC = () => {
  const items = useMemo<AccordionItem[]>(
    () => [
      { id: 'text', header: 'Текстовый пункт', content: 'Произвольное содержимое аккордеона' },
      {
        id: 'action',
        header: 'Контент с действием',
        content: (
          <Button intent={ Intent.Outline } size={ Size.Medium }>
            Действие
          </Button>
        )
      },
      { id: 'disabled', header: 'Недоступный пункт', content: null, disabled: true }
    ],
    []
  );

  return <Accordion size={ AccordionSize.Large } items={ items } />;
};
