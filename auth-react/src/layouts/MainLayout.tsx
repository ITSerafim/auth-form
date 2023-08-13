import React from 'react';
import AuthToast from '../components/toasts/AuthToast';

interface ToastConfig {
  message: string;
  extraClass?: string;
}

interface MainLayoutProps {
  toastConfig: ToastConfig;
  children: JSX.Element | JSX.Element[];
}

function MainLayout({ children, toastConfig }: MainLayoutProps) {
  return (
    <main>
      <img src='picture.png' alt='nature' className='image' />
      {children}
      <AuthToast
        message={toastConfig.message}
        extraClass={toastConfig.extraClass}
      />
    </main>
  );
}

export default MainLayout;
