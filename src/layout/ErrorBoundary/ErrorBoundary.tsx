import { Component, type ErrorInfo, type ReactNode } from 'react';

import { ROUTES } from '@/constants';
import { EmptyState, Intent } from '@/shared/ui';

import type { ErrorBoundaryProps, ErrorBoundaryState } from './types';

import styles from './ErrorBoundary.module.scss';

/** Граница ошибок, защищающая layout от падения дочерних маршрутов
 * @param children - защищаемое дерево компонентов
 * @param fallback - пользовательский UI вместо дефолтного (ReactNode или render-prop)
 * @param onError - колбэк для логирования пойманной ошибки
 * @returns {ReactNode}
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.props.onError?.(error, info);
  }

  reset = (): void => {
    this.setState({ error: null });
  };

  render(): ReactNode {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if (!error) {
      return children;
    }

    if (typeof fallback === 'function') {
      return fallback({ error, reset: this.reset });
    }

    if (fallback) {
      return fallback;
    }

    return (
      <EmptyState
        className={ styles.fallback }
        title='Что-то пошло не так'
        subtitle={ error.message }
        buttons={ [
          { intent: Intent.Primary, key: 'refresh', children: 'Обновить', onClick: () => location.reload() },
          { intent: Intent.Secondary, key:'main', children: 'На главную', to: ROUTES.MAIN }
        ] }
      />
    );
  }
}
