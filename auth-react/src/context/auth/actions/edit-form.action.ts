import { useContext } from 'react';
import { EditFormState } from '../states/edit-form.state';
import { EditFormStateType } from '../../../types/state/edit-form';

export const useEdit = () => useContext<EditFormStateType>(EditFormState)