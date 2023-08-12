import { useState } from "react";
import { Input } from "../Input";
import "./style.scss"
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../formSchema";

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
 })

  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleRegisterClick = () => {
    navigate("/register")
  };


   return (
    <main>
      <section>
        <img src={Logo} alt="logo Kenzie"/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="title1">Login</h2>
          <div>
            <Input
              id="email"
              label="Email"
              placeholder="Digite seu email"
              type="email"
              register = {register("email")}
              error={errors.email}
            />
            <Input
              id="senha"
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              register = {register("password")}
              error={errors.password}
            />
            <button className="buttonLogin" type="submit">Entrar</button>
            <p className="text1">Ainda não possui uma conta?</p>
            <button className="buttonRegister" onClick={handleRegisterClick}>Cadastre-se</button>
          </div>
        </form>
      </section>
    </main>
   );
};
