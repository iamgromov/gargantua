export interface CommentDTO {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface GetCommentsParams {
  postId?: number;
}
