import React, { useState } from 'react';
import { User } from '../../../contracts/models/User';
import { ButtonEvent } from '../../../types/ui/button';
import { InputEvent } from '../../../types/ui/input';
import FormControl from '../../core/form/FormControl';
import Button from '../../ui/button/Button';
import { UserRequest } from '../../../contracts/requests/user.request';

interface FormRegisterBodyProps {
  register: (payload: UserRequest) => void;
}

function FormRegisterBody({ register }: FormRegisterBodyProps) {
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

    register(payload);
  };

  return (
    <form className='login-form'>
      <FormControl
        styleClass='control-type'
        controlStyle='form_control_vertic'
        withLabel={true}
        labelText='Имя'
        labelStyleClass='control-label'
        value={userData.name}
        onChange={(event: InputEvent) =>
          setUserData({ ...userData, name: event.target.value })
        }
      />

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

      <Button
        styleClasses='btn login'
        text='Зарегистрироваться'
        type='submit'
        onClick={submit}
      />
    </form>
  );
}

export default FormRegisterBody;
