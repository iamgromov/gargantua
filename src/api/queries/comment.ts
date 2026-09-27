import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '../queryKeys';
import { getComments } from '../requests/comment';

import type { GetCommentsParams } from '../types/comment';

export const useGetComments = (params?: GetCommentsParams) =>
  useQuery({
    queryKey: [QUERY_KEYS.COMMENTS, params],
    queryFn: () => getComments(params),
    placeholderData: (previousData) => previousData
  });
