import { useEffect } from 'react';

export const useDocumentTitle = (title: string) => {

  useEffect(() => {
    const originalTitle = 'Gargantua';
    document.title = title;

    return () => {
      document.title = originalTitle;
    };
  }, [title]);
};
