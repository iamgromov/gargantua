import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import QueryProvider from '@/api';
import { App } from '@/app/App';
import { store } from '@/store';

import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={ store }>
      <QueryProvider>
        <App />
      </QueryProvider>
    </Provider>
  </StrictMode>
);
