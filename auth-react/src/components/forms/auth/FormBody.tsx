import React, { useState } from 'react';
import FormControl from '../../core/form/FormControl';
import Button from '../../ui/button/Button';
import Link from '../../core/link/Link';
import { User } from '../../../contracts/models/User';
import { InputEvent } from '../../../types/ui/input';
import { ButtonEvent } from '../../../types/ui/button';
import { UserRequest } from '../../../contracts/requests/user.request';

interface FormBodyProps {
  login: (payload: UserRequest) => void;
}

function FormBody({ login }: FormBodyProps) {
  const [userData, setUserData] = useState<User>({
    name: '',
    email: '',
    password: '',
  });

  const submit = (event: ButtonEvent) => {
    event.preventDefault();

    const payload = {
      ...userData,
    };

    login(payload);
    setUserData({ name: '', email: '', password: '' });
  };

  return (
    <form className='login-form'>
      <FormControl
        styleClass='control-type'
        controlStyle='form_control_vertic'
        withLabel={true}
        labelText='Email'
        labelStyleClass='control-label'
        value={userData.email}
        onChange={(event: InputEvent) =>
          setUserData({ ...userData, email: event.target.value })
        }
      />

      <FormControl
        styleClass='control-type'
        controlStyle='form_control_vertic'
        withLabel={true}
        labelText='Пароль'
        type='password'
        labelStyleClass='control-label'
        value={userData.password}
        onChange={(event: InputEvent) =>
          setUserData({ ...userData, password: event.target.value })
        }
      />

      <section className='forgot-section'>
        <FormControl
          styleClass='control-type'
          controlStyle='form_control_horize'
          withLabel={true}
          labelText='Запомнить меня'
          type='radio'
          labelStyleClass='control-label'
          labelStyleExtra='control-label_radio'
        />
        <Link styles='a-link' href='#' text='Забыли пароль ?' />
      </section>
      <div className='btns'>
        <Button
          styleClasses='btn login'
          text='Войти'
          type='submit'
          onClick={submit}
        />
        <Button
          styleClasses='btn google-sign text-with-icon'
          text='Войти с помощью Google'
          type='submit'
        >
          <img src='google.svg' alt='google-icon' />
        </Button>
      </div>
    </form>
  );
}

export default FormBody;
