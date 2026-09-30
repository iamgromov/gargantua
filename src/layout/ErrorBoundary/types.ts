import type { ErrorInfo, ReactNode } from 'react';

export interface ErrorBoundaryFallbackProps {
  error: Error;
  reset: () => void;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode | ((_props: ErrorBoundaryFallbackProps) => ReactNode);
  onError?: (_error: Error, _info: ErrorInfo) => void;
}

export interface ErrorBoundaryState {
  error: Error | null;
}
