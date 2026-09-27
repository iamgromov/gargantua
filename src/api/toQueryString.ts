/** Сериализует объект с параметрами в query-строку */
export const toQueryString = (params?: object): string => {
  if (!params) {
    return '';
  }

  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) {
      continue;
    }

    if (Array.isArray(value) && value.length !== 0) {
      searchParams.set(key, value.join(','));
    } else if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    ) {
      searchParams.set(key, String(value));
    }
  }

  return searchParams.toString();
};
