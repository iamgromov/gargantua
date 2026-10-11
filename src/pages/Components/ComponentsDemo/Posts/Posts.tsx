import { useCallback, useMemo, type FC } from 'react';

import { useGetPosts } from '@/api/queries/post';
import { HeadingStandard, Spinner, SpinnerSize } from '@/shared/ui';
import { Accordion, AccordionSize, type AccordionItem } from '@/shared/ui/Accordion';
import { Button, Intent, Size } from '@/shared/ui/Button';

import styles from '../../Components.module.scss';

export const Posts: FC = () => {
  const { data, isPending, isError, isFetching, refetch } = useGetPosts({ _limit: 5 });

  const handleRefetch = useCallback(() => {
    void refetch();
  }, [refetch]);

  const items = useMemo<AccordionItem[]>(() => {
    if (isPending) {
      return [
        { id: 'posts-loading', header: 'Загрузка постов…', content: <Spinner size={ SpinnerSize.Medium } /> }
      ];
    }

    if (isError) {
      return [
        {
          id: 'posts-error',
          header: 'Не удалось загрузить данные',
          content: (
            <div className={ styles.column }>
              <HeadingStandard>Попробуйте повторить запрос</HeadingStandard>
              <Button
                intent={ Intent.Danger }
                size={ Size.Medium }
                loading={ isFetching }
                onClick={ handleRefetch }
              >
                Повторить
              </Button>
            </div>
          )
        }
      ];
    }

    if (!data || data.length === 0) {
      return [{ id: 'posts-empty', header: 'Постов пока нет', content: null, disabled: true }];
    }

    return data.map((post) => ({
      id: String(post.id),
      header: post.title.trim(),
      content: post.body
    }));
  }, [data, isError, isPending, isFetching, handleRefetch]);

  return <Accordion size={ AccordionSize.Large } items={ items } />;
};
