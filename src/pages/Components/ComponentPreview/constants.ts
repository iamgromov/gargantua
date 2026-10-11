import { REPO_TREE_URL } from '@/constants';

export const getSourceLabel = (link: string) =>
  (link.startsWith(REPO_TREE_URL) ? `@${link.slice(REPO_TREE_URL.length)}` : link);
