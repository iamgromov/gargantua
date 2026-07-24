import { useEffect, useState, type FC } from 'react';
import cn from 'classnames';

import { IconButton } from '@/shared/ui';

import { ArrowUp } from '@/assets/icons';
import styles from './ScrollToTop.module.scss';

import { scrollToTop } from '@/utils';

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
      <IconButton icon={<ArrowUp />} onClick={scrollToTop} size='large' className={styles.button} />
    </div>
  );
};
