import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EditFormProvider } from './context/auth/providers/edit-form.provider';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <EditFormProvider>
        <App />
      </EditFormProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
