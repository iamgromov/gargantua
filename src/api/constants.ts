// количество повторных попыток запроса
export const RETRY_COUNT = 3;

// http-статусы, при которых запрос не имеет смысла повторять
export const HTTP_STATUS_TO_NOT_RETRY = [400, 401, 403, 404];

// ошибка при использовании abortController
export const CANCELLED_ERROR_NAME = 'CanceledError';
