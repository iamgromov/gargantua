import { useEffect, useState, type FC } from 'react';
import cn from 'classnames';

import { IconButton } from '@/shared/ui';
import { scrollToTop } from '@/shared/utils';

import { ArrowUp } from '@/assets/icons';
import styles from './ScrollToTop.module.scss';

export const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 70) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={cn(styles.scroll, styles.visible)}>
      <IconButton
        icon={<ArrowUp />}
        onClick={scrollToTop}
        variant='outline'
        size='medium'
        className={styles.button}
      />
    </div>
  );
};
