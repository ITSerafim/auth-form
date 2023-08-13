import React from 'react';
import Link from '../../core/link/Link';

interface FormFooterProps {
  changeForm: (value: boolean) => void;
  isEdit?: boolean;
}

function FormFooter({ changeForm, isEdit }: FormFooterProps) {
  return isEdit ? (
    <div className='register'>
      <span> У вас уже есть аккаунт ?</span>
      <Link styles='a-link' text=' Войдите' onClick={() => changeForm(false)} />
    </div>
  ) : (
    <div className='register'>
      <span>Нет аккаунта?</span>
      <Link
        styles='a-link'
        text='Зарегистрируйтесь уже сегодня'
        onClick={() => changeForm(true)}
      />
    </div>
  );
}

export default FormFooter;
