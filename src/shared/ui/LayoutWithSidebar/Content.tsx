import { type FC } from 'react';

import type { ContentProps } from './types';

/** Content component — контейнер основного контента раскладки
 * @param children - основной контент
 * @param className - дополнительный класс контейнера
 * @returns {JSX.Element}
 */
export const Content: FC<ContentProps> = ({ children, className }) => (
  <div className={ className }>{ children }</div>
);
