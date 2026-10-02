import { useEffect, useState, type FC } from 'react';
import cn from 'classnames';

import { ArrowUp } from '@/assets/icons';
import { IconButton, IconButtonSize } from '@/shared/ui/IconButton';
import { scrollToTop } from '@/utils';

import { type ScrollToTopProps } from './types';

import styles from './ScrollToTop.module.scss';

/** Кнопка плавного возврата наверх страницы */
export const ScrollToTop: FC<ScrollToTopProps> = ({ className }) => {
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
    <div className={ cn(styles.scroll, styles.visible, className) }>
      <IconButton
        icon={ <ArrowUp /> }
        onClick={ scrollToTop }
        size={ IconButtonSize.Large }
        className={ styles.button }
      />
    </div>
  );
};
