import type { FC } from 'react';

import { useTheme } from '@/shared/hooks';
import type { IconProps } from '@/shared/types';

import styles from './ThemeSwitcher.module.scss';

/** Switcher for changing themes */
export const ThemeSwitcher: FC<IconProps> = ({ ...props }) => {
  const toggleTheme = useTheme();

  return (
    <>
      <svg
        className={styles.switcher}
        onClick={toggleTheme}
        width='54'
        height='25'
        viewBox='0 0 306 137'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <rect
          x='4'
          y='23'
          width='298'
          height='110'
          rx='12'
          fill='#D9D9D9'
          stroke='#1B1B23'
          strokeWidth='8'
        />
        <path
          d='M281.482 6.2666C288.654 5.35225 295 10.9401 295 18.1699V104.363C295 110.419 290.488 115.526 284.479 116.272L149.751 133H16C9.37258 133 4 127.627 4 121V35C4 28.3726 9.37258 23 16 23H150.254L150.506 22.9678L281.482 6.2666Z'
          fill='white'
          stroke='#1B1B23'
          strokeWidth='8'
        />
      </svg>
    </>
  );
};
