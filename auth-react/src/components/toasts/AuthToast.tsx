import React from 'react';

interface AuthToastProps {
  message: string;
  extraClass?: string;
}

function AuthToast({ message, extraClass }: AuthToastProps) {
  return <div className={`notification ${extraClass}`}>{message}</div>;
}

export default AuthToast;
