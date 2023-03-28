import { useForm } from "react-hook-form";
import { iUserLogin } from "./interface";
import { useProvider } from "../../contexts/authContext";
import { InputStyle } from "../../styles/InputStyle";
import { ButtonS } from "./style";
import { ButtonEye } from "../ShowPass";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../schemas/loginSchema";

export default function FormLogin() {
  const { onSubmitFunctionLogin, useEye, loading } = useProvider();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmitFunctionLogin)}>
      <h2>Olá, bem-vindo de volta!</h2>
      <InputStyle error={!!errors.email?.message}>
        <label htmlFor="email">{errors.email?.message || "Email"}</label>
        <input
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
      </InputStyle>
      <InputStyle error={!!errors.password?.message}>
        <label htmlFor="password">{errors.password?.message || "Senha"}</label>
        <input
          type={useEye}
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <ButtonEye />
      </InputStyle>
      <ButtonS type="submit">{loading ? <Loading /> : "Entrar"}</ButtonS>
      <span>
        Ainda não tem conta? <Link to={"/register"}>clique aqui!</Link>
      </span>
    </form>
  );
}
