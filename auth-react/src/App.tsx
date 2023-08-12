import React from 'react';
import FormLayout from './layouts/FormLayout';
import FormBody from './components/forms/auth/FormBody';
import FormFooter from './components/forms/auth/FormFooter';
import FormHeader from './components/forms/auth/FormHeader';
import MainLayout from './layouts/MainLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <FormLayout>
          <FormHeader />
          <FormBody />
          <FormFooter />
        </FormLayout>
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
