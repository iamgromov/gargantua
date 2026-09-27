export interface PostDTO {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface GetPostsParams {
  userId?: number;
  _limit?: number;
  _start?: number;
}
