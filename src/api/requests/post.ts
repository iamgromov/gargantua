import jsonPlaceholder from '../services/jsonplaceholder';
import { toQueryString } from '../toQueryString';

import type { GetPostsParams, PostDTO } from '../types/post';

export const getPosts = async (params?: GetPostsParams) => {
  const queryString = toQueryString(params);

  return jsonPlaceholder.get<PostDTO[]>(queryString ? `/posts?${queryString}` : '/posts');
};

export const getPostById = async (id: number) => jsonPlaceholder.get<PostDTO>(`/posts/${id}`);
