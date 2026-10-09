import { type FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { ArrowLeft } from '@/assets/icons';
import { useCanGoBack, useDocumentTitle } from '@/hooks';

import { Button, Intent, Size } from '../Button';
import { HeadingLarge } from '../Typography';

import { PAGE_TITLE_DEFAULT } from './constants';
import { type PageTitleProps } from './types';

import styles from './PageTitle.module.scss';

/** Заголовок страницы с кнопкой возврата на предыдущий экран */
export const PageTitle: FC<PageTitleProps> = ({ title, documentTitle, className, style }) => {
  const canGoBack = useCanGoBack();
  const navigate = useNavigate();

  useDocumentTitle(documentTitle ?? PAGE_TITLE_DEFAULT);

  const handleBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className={ cn(styles.root, className) } style={ style }>
      { canGoBack && (
        <Button
          intent={ Intent.Transparent }
          size={ Size.Small }
          icon={ <ArrowLeft /> }

          aria-label={ 'Вернуться назад' }
          onClick={ handleBackClick }
        >
          Back
        </Button>
      ) }
      <HeadingLarge className={ styles.title } tag='h1'>{ title }</HeadingLarge>
    </div>
  );
};
