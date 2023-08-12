import React from 'react';
import FormLayout from './layouts/FormLayout';
import FormBody from './components/forms/auth/FormBody';
import FormFooter from './components/forms/auth/FormFooter';
import FormHeader from './components/forms/auth/FormHeader';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <FormLayout>
        <FormHeader />
        <FormBody />
        <FormFooter />
      </FormLayout>
    </MainLayout>
  );
}

export default App;
