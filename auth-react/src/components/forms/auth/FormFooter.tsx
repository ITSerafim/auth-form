import React from "react";
import Link from "../../core/link/Link";

function FormFooter() {
  return (
    <div className="register">
      <span>Нет аккаунта?</span>
      <Link styles="a-link" text="Зарегистрируйтесь уже сегодня" />
    </div>
  );
}

export default FormFooter;
