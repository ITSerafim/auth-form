import { createContext } from 'react';
import { EditFormStateType } from '../../../types/state/edit-form';

export const EditFormState = createContext<EditFormStateType>({
  isEdit: false,
  setEdit: (value: boolean) => value,
})