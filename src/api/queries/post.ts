import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '../queryKeys';
import { getPostById, getPosts } from '../requests/post';

import type { GetPostsParams } from '../types/post';

export const useGetPosts = (params?: GetPostsParams) =>
  useQuery({
    queryKey: [QUERY_KEYS.POSTS, params],
    queryFn: () => getPosts(params),
    placeholderData: (previousData) => previousData
  });

export const useGetPost = (id: number) =>
  useQuery({
    queryKey: [QUERY_KEYS.POSTS, id],
    queryFn: () => getPostById(id),
    placeholderData: (previousData) => previousData,
    enabled: Boolean(id)
  });
