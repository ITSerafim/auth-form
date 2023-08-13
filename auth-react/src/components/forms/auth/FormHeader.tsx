import React from 'react';

interface FormHeaderProps {
  isEdit: boolean;
}

function FormHeader({ isEdit }: FormHeaderProps) {
  return (
    <div>
      {isEdit ? (
        <>
          <h3 className='form-title_sub'>Добро пожаловать!</h3>
          <h2 className='form-title'>Регистрация нового аккаунта</h2>
        </>
      ) : (
        <>
          <h3 className='form-title_sub'>С возвращением!</h3>
          <h2 className='form-title'>Войти в свой аккаунт</h2>
        </>
      )}
    </div>
  );
}

export default FormHeader;
