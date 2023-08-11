import React from "react";
import FormControl from "../../core/form/FormControl";
import Button from "../../ui/button/Button";
import Link from "../../core/link/Link";

function FormBody() {
  return (
    <form className="login-form">
      <FormControl
        styleClass="control-type"
        controlStyle="form_control_vertic"
        withLabel={true}
        labelText="Email"
        labelStyleClass="control-label"
      />

      <FormControl
        styleClass="control-type"
        controlStyle="form_control_vertic"
        withLabel={true}
        labelText="Пароль"
        type="password"
        labelStyleClass="control-label"
      />

      <section className="forgot-section">
        <FormControl
          styleClass="control-type"
          controlStyle="form_control_horize"
          withLabel={true}
          labelText="Запомнить меня"
          type="radio"
          labelStyleClass="control-label"
          labelStyleExtra="control-label_radio"
        />
        <Link styles="a-link" href="#" text="Забыли пароль ?" />
      </section>
      <div className="btns">
        <Button styleClasses="btn login" text="Войти" type="submit" />
        <Button
          styleClasses="btn google-sign text-with-icon"
          text="Войти с помощью Google"
          type="submit"
        >
          <img src="google.svg" alt="google-icon" />
        </Button>
      </div>
    </form>
  );
}

export default FormBody;
