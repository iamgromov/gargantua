import jsonPlaceholder from '../services/jsonplaceholder';
import { toQueryString } from '../toQueryString';

import type { CommentDTO, GetCommentsParams } from '../types/comment';

export const getComments = async (params?: GetCommentsParams) => {
  const queryString = toQueryString(params);

  return jsonPlaceholder.get<CommentDTO[]>(queryString ? `/comments?${queryString}` : '/comments');
};

export const getCommentById = async (id: number) =>
  jsonPlaceholder.get<CommentDTO>(`/comments/${id}`);
