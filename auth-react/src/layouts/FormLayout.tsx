import React from "react";

interface FormLayoutProps {
  children: JSX.Element | JSX.Element[];
}

function FormLayout({ children }: FormLayoutProps) {
  return <section className="form-section">{children}</section>;
}

export default FormLayout;
