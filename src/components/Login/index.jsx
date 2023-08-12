import { useNavigate } from "react-router-dom";
import "./style.scss"
import { Input } from "../Input";
import Logo from "../../assets/Logo.svg"
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const Login = () => {
  const { register, handleSubmit} = useForm()
  const navigate = useNavigate()

  const submit = (formData) => {
    userRegister(formData)
  }

  const handleRegisterClick = () => {
    navigate("/register")
  }

  const userRegister = async (formData) => {
    try {
    const {data} = await api.post('/sessions', formData)
      localStorage.setItem("token", data.token)
      toast.success("Bem-vindo! Login realizado com sucesso.")
      navigate("/")
    } catch (error) {
    console.log(error.message)
      toast.error("Ocorreu um erro ao fazer o login. Verifique suas credenciais e tente novamente.")
    }
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
