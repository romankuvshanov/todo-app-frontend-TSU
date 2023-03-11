import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../../app/providers/auth";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import BaseForm from "../../shared/components/BaseForm";
import BaseFormError from "../../shared/components/BaseFormError";

export default function AuthForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const { setIsAuthenticated } = useAuthContext();

  function handleSubmit(event) {
    const formData = new FormData(event.target);

    const isAdmin =
      formData.get("login") === "admin" && formData.get("password") === "admin";

    if (!isAdmin) {
      setErrors([
        "Логин и/или пароль не правильны. Пожалуйста, попробуйте, снова.",
      ]);

      return;
    }

    navigate("/personal", { replace: true });
    setIsAuthenticated(true);
  }

  return (
    <BaseForm onSubmit={handleSubmit}>
      <Input
        title="Логин"
        id="input-login"
        name="login"
        autoFocus
        required
        placeholder="Ваш логин"
      />
      <Input
        title="Пароль"
        id="input-password"
        name="password"
        type="password"
        required
        placeholder="Ваш пароль"
      />
      {!!errors.length && <BaseFormError message={errors[0]} />}
      <Button type="submit">Войти</Button>
    </BaseForm>
  );
}
