import { useCallback, useMemo, type FC } from 'react';

import { useGetPosts } from '@/api/queries/post';
import { Spinner, Typography } from '@/shared/ui';
import { Accordion, type AccordionItem } from '@/shared/ui/Accordion';
import { Button, Intent, Size } from '@/shared/ui/Button';

import styles from './Posts.module.scss';

const Posts: FC = () => {
  const { data, isPending, isError, isFetching, refetch } = useGetPosts({ _limit: 5 });

  const handleRefetch = useCallback(() => {
    void refetch();
  }, [refetch]);

  const postsItems = useMemo<AccordionItem[]>(
    () =>
      (data ?? []).map((post) => ({
        id: String(post.id),
        header: post.title.trim(),
        content: post.body
      })),
    [data]
  );

  if (!data) {
    return null;
  }

  return (
    <>
      <Typography variant='h1'>Accordion</Typography>
      <div className={ styles.row }>
        { isPending && <Spinner size='large' /> }

        { isError && (
          <div className={ styles.column }>
            <Typography variant='h4'>Не удалось загрузить данные</Typography>
            <Button
              intent={ Intent.Danger }
              size={ Size.Medium }
              loading={ isFetching }
              onClick={ handleRefetch }
            >
              Повторить
            </Button>
          </div>
        ) }

        { !isPending && !isError && <Accordion size='large' items={ postsItems } /> }
      </div>
    </>
  );
};

export default Posts;
