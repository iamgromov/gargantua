import type { FC } from 'react';

import type { IconProps } from 'shared/types';

export const ThemeSwitcher: FC<IconProps> = ({ ...props }) => {
  return (
    <svg width='54' height='25' viewBox='0 0 306 137' fill='none' {...props}>
      <rect
        x='1'
        y='20'
        width='304'
        height='116'
        rx='15'
        fill='#D9D9D9'
        stroke='#1B1B23'
        stroke-width='4'
      />
      <path
        d='M281.103 3.29004C290.067 2.14688 298 9.13254 298 18.1699V104.363C298 111.933 292.36 118.316 284.849 119.249L149.939 136H16C7.71573 136 1 129.284 1 121V35C1 26.7157 7.71573 20 16 20H150.063L150.127 19.9922L281.103 3.29004Z'
        fill='white'
        stroke='#1B1B23'
        stroke-width='4'
      />
    </svg>
  );
};
