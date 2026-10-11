import { REPO_TREE_URL } from '@/constants';

const SOURCE_URL = `${REPO_TREE_URL}/src/`;

export const getSourceLabel = (link: string) =>
  (link.startsWith(SOURCE_URL) ? `@/${link.slice(SOURCE_URL.length)}` : link);
