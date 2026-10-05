import { useEffect, useState, type FC } from 'react';
import cn from 'classnames';

import { ArrowUp } from '@/assets/icons';
import { Button, Intent, Size } from '@/shared/ui/Button';
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
      <Button
        className={ styles.button }
        intent={ Intent.Ghost }
        size={ Size.Large }
        icon={ <ArrowUp /> }
        round={ true }
        onClick={ scrollToTop }
      />
    </div>
  );
};
