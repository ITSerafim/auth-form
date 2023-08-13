import FormLayout from './layouts/FormLayout';
import FormBody from './components/forms/auth/FormBody';
import FormFooter from './components/forms/auth/FormFooter';
import FormHeader from './components/forms/auth/FormHeader';
import MainLayout from './layouts/MainLayout';
import { useMutation } from '@tanstack/react-query';
import { UserRequest } from './contracts/requests/user.request';
import { AuthService } from './services/auth.service';
import { useEdit } from './context/auth/actions/edit-form.action';
import FormRegisterBody from './components/forms/auth/FormRegisterBody';
import { useState } from 'react';

function App() {
  const { isEdit, setEdit } = useEdit();
  const [toastConfig, setToastConfig] = useState({
    message: '',
    extraClass: '',
  });

  const authService = new AuthService();

  const timeout = (message: string) =>
    setTimeout(
      () =>
        setToastConfig({
          message: message,
          extraClass: '',
        }),
      1500,
    );

  const toast = (message: string, isError = false) => {
    setToastConfig({
      message: message,
      extraClass: isError ? 'notification-error' : 'notification-success',
    });

    timeout(message);
  };

  const login = useMutation({
    mutationFn: async (payload: UserRequest) =>
      await authService.login(payload),
    onSuccess: ({ data, message, statusCode }) => {
      if (data) {
        localStorage.setItem('token', data);
      }

      if (statusCode === 200 || statusCode === 201) {
        toast('Аутентификация успешно пройдена');
      } else {
        toast(message, true);
      }

    },
  });

  const register = useMutation({
    mutationFn: async (payload: UserRequest) =>
      await authService.register(payload),
    onSuccess: ({ data, statusCode, message }) => {
      if (data) {
        localStorage.setItem('token', data);
      }

      if (statusCode === 200 || statusCode === 201) {
        toast('Пользователь успешно зарегистрирован!');
      } else {
        toast(message, true);
      }
    },
  });

  const auth = (payload: UserRequest) =>
    isEdit ? register.mutate(payload) : login.mutate(payload);

  const changeForm = (value: boolean) => setEdit(value);

  return (
    <MainLayout toastConfig={toastConfig}>
      <FormLayout>
        <FormHeader isEdit={isEdit} />
        {isEdit ? (
          <FormRegisterBody register={auth} />
        ) : (
          <FormBody login={auth} />
        )}
        <FormFooter changeForm={changeForm} isEdit={isEdit} />
      </FormLayout>
    </MainLayout>
  );
}

export default App;
