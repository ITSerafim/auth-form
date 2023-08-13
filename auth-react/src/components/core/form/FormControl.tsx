import React from 'react';
import Input, { InputProps } from '../../ui/input/Input';

interface FormControlProps extends InputProps {
  controlStyle?: string;
}

function FormControl({ controlStyle, ...props }: FormControlProps) {
  return (
    <div className={`form-control ${controlStyle}`}>
      <Input {...props} />
    </div>
  );
}

export default FormControl;
