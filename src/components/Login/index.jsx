import { useNavigate } from "react-router-dom";
import "./style.scss"
import { Input } from "../Input";
import Logo from "../../assets/Logo.svg"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Login = () => {
  const { register, handleSubmit} = useForm()
  const navigate = useNavigate()
  
  const {userLogin} = useContext(UserContext)

  const submit = (formData) => {
    userLogin(formData)
  }

  const handleRegisterClick = () => {
    navigate("/register")
  }

   return (
    <main>
      <section>
        <img src={Logo} alt="logo Kenzie"/>
        <form onSubmit={handleSubmit(submit)}>
          <h2 className="title1">Login</h2>
          <div>
            <Input
              id="email"
              label="Email"
              placeholder="Digite seu email"
              type="email"
              register = {register("email")}
              
            />
            <Input
              id="password"
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              register = {register("password")}
              
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
