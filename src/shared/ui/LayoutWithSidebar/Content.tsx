import { type FC } from 'react';

import type { ContentProps } from './types';

/** Контейнер основного контента раскладки */
export const Content: FC<ContentProps> = ({ children, className }) => (
  <div className={ className }>{ children }</div>
);
