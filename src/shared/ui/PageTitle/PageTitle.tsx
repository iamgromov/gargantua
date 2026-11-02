import { type FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { ArrowLeft2 } from '@/assets/icons/arrows';
import { useCanGoBack, useDocumentTitle } from '@/hooks';

import { Button, Intent, Size } from '../Button';
import { HeadingLarge } from '../Typography';

import { PAGE_TITLE_DEFAULT } from './constants';
import { BackButtonPosition, type PageTitleProps } from './types';

import styles from './PageTitle.module.scss';

/** Заголовок страницы с кнопкой возврата на предыдущий экран */
export const PageTitle: FC<PageTitleProps> = ({
  title,
  documentTitle,
  backButtonPosition = BackButtonPosition.Left,
  className,
  style
}) => {
  const { canGoBack, isFirstBackAppearance } = useCanGoBack();
  const navigate = useNavigate();

  useDocumentTitle(documentTitle ?? PAGE_TITLE_DEFAULT);

  const arrowIconHeight = backButtonPosition === BackButtonPosition.Top ? 16 : 40;
  const arrowIconText = backButtonPosition === BackButtonPosition.Top ? 'Back' : '';
  const shouldAnimateBackButton = isFirstBackAppearance && backButtonPosition === BackButtonPosition.Left;

  const rootClass = cn(styles.root, styles[backButtonPosition], {
    [styles.appear]: shouldAnimateBackButton
  }, className);

  const handleBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className={ rootClass } style={ style }>
      { canGoBack && (
        <Button
          className={ styles.backButton }
          intent={ Intent.Transparent }
          size={ Size.Small }
          icon={ <ArrowLeft2 height={ arrowIconHeight } /> }
          aria-label={ 'Вернуться назад' }
          onClick={ handleBackClick }
        >
          { arrowIconText }
        </Button>
      ) }
      <HeadingLarge className={ styles.title } tag='h1'>{ title }</HeadingLarge>
    </div>
  );
};
