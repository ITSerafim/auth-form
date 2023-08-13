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

function App() {
  const { isEdit, setEdit } = useEdit();

  const authService = new AuthService();

  const login = useMutation({
    mutationFn: async (payload: UserRequest) =>
      await authService.login(payload),
    onSuccess: ({ data }) => {
      if (data) {
        localStorage.setItem('token', data);
      }
    },
  });

  const register = useMutation({
    mutationFn: async (payload: UserRequest) =>
      await authService.register(payload),
    onSuccess: ({ data }) => {
      if (data) {
        localStorage.setItem('token', data);
      }
    },
  });

  const auth = (payload: UserRequest) =>
    isEdit ? register.mutate(payload) : login.mutate(payload);

  const changeForm = (value: boolean) => setEdit(value);

  return (
    <MainLayout>
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
