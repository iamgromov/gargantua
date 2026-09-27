import axios, {
  isAxiosError,
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig
} from 'axios';

import type { ApiError } from './types/error';

export interface DefaultError extends Error {
  response: {
    data: {
      errors?: ApiError[];
      message?: string;
    };
    status: number;
    statusText: string;
    headers: Record<string, string>;
    config: Record<string, string>;
    message: string;
  };
  config?: AxiosError['config'];
}

/** Обёртка над axios: базовый URL, общие заголовки и разворачивание response.data */
export default class ApiService {
  private _api: AxiosInstance;

  constructor(baseURL: string) {
    this._api = axios.create({
      baseURL,
      headers: {
        // без Content-Type GET остаётся «простым» запросом и не вызывает CORS-префлайт
        Accept: 'application/json'
      },
      timeout: 30000
    });

    this._api.interceptors.response.use(
      (response) => response.data,
      (error) => {
        if (isAxiosError(error)) {
          console.error(`[api] ${error.config?.method ?? 'get'} ${error.config?.url ?? ''}`, error);
        }

        return Promise.reject(error as AxiosError);
      }
    );
  }

  /**
   * GET-запрос.
   * Интерсептор выше уже развернул axios-ответ (`response.data`), поэтому `T` — это тело ответа бэкенда.
   */
  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this._api.get(url, config) as Promise<T>;
  }
}
