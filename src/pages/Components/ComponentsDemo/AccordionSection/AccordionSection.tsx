import { type FC } from 'react';

import { AccordionDemo } from '../AccordionDemo/AccordionDemo';
import { Posts } from '../Posts/Posts';

/** Секция с аккордеоном и списком постов */
export const AccordionSection: FC = () => (
  <>
    <AccordionDemo />
    <Posts />
  </>
);
