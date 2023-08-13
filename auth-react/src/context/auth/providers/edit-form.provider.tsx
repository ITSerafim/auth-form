import { useState } from 'react';
import { EditFormState } from '../states/edit-form.state';

interface EditFormProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const EditFormProvider = ({ children }: EditFormProviderProps) => {
  const [isEdit, setEdit] = useState(false);

  return (
    <EditFormState.Provider
      value={{ isEdit, setEdit }}
    >{children}</EditFormState.Provider>
  );
};
