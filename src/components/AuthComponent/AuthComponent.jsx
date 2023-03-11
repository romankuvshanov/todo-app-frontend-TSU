import "./AuthComponent.scss";
import FormInputComponent from "../FormInputComponent/FormInputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AuthComponent() {
  const navigate = useNavigate();
  const [loginWasNotSuccessful, setLoginWasNotSuccessful] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    if (
      formData.get("login") === "admin" &&
      formData.get("password") === "admin"
    ) {
      setLoginWasNotSuccessful(false);
      navigate("/personal", { replace: true });
    } else {
      setLoginWasNotSuccessful(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Здесь лучше использовать компонент или input с label? Как удобнее передавать props?
       Ломается автодополнение ide*/}
      <FormInputComponent
        title={"Login"}
        inputProps={{
          id: "input-login",
          name: "login",
          type: "text",
          autoFocus: true,
          required: true,
          placeholder: "Your Login",
        }}
      ></FormInputComponent>

      <FormInputComponent
        title={"Password"}
        inputProps={{
          id: "input-password",
          name: "password",
          type: "password",
          required: true,
          placeholder: "Your password",
        }}
      ></FormInputComponent>

      {loginWasNotSuccessful && (
        <p className={`auth-component__error-message`}>
          Login and/or password were incorrect. Please, try again
        </p>
      )}

      <ButtonComponent
        onClick={() => setLoginWasNotSuccessful(false)}
        type={"submit"}
        title={"Log in"}
      ></ButtonComponent>
    </form>
  );
}
