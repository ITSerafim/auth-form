import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  styleClass: string;
  withLabel?: boolean;
  labelText?: string;
  labelStyleClass?: string;
  labelStyleExtra?: string;
}

function Input({
  styleClass,
  withLabel,
  labelText,
  labelStyleClass,
  labelStyleExtra,
  ...props
}: InputProps) {
  return (
    <>
      {withLabel && (
        <label
          className={`${labelStyleClass} ${labelStyleExtra}`}
          htmlFor="labelInput"
        >
          {labelText}
        </label>
      )}
      <input id="labelInput" className={styleClass} {...props} />
    </>
  );
}

export default Input;
