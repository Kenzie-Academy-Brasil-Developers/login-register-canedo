import { useNavigate } from "react-router-dom";
import "./style.scss"
import { Input } from "../Input";
import Logo from "../../assets/Logo.svg"
import { useForm, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; 
import { formSchema } from "../formSchema";
import React, { useContext} from "react";
import { UserContext } from "../../providers/UserContext";

export const Register = () => {
   const { register, handleSubmit, formState: { errors, isValid } } = useForm({
      resolver: zodResolver(formSchema),
   });
   
   const navigate = useNavigate()

   const handleLoginClick = () => {
     navigate("/")
   };

   const { userRegister } = useContext(UserContext)

   const submit = (formData) => {
      userRegister(formData)
   }


   return (
      <section>
        <div className="divPrimary">
            <img src={Logo} alt="logo Kenzie"/>
            <button onClick={handleLoginClick}>Voltar</button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
            <h2 className="title1">Crie sua conta</h2>
            <p className="text1">Rapido e grátis, vamos nessa</p>
            <div>
               <Input
               id="name"
               label="Nome"
               placeholder="Digite aqui seu nome"
               type="text"
               register = {register("name")}
               error={errors.name}
               />
               <Input
               id="email"
               label="Email"
               placeholder="Digite aqui seu email"
               type="email"
               register = {register("email")}
               error={errors.email}
               />
               <Input
               id="senha"
               label="Senha"
               placeholder="Digite aqui sua senha"
               type="password"
               register = {register("password")}
               error={errors.password}
               />
               <Input
               id="confirmPassword"
               label="Confirmar Senha"
               placeholder="Digite novamente sua senha"
               type="password"
               register = {register("confirmPassword")}
               error={errors.confirmPassword}
               />
               <Input
               id="bio"
               label="Bio"
               placeholder="Fale sobre você"
               type="text"
               register = {register("bio")}
               />
               <Input
               id="contact"
               label="Contato"
               placeholder="Opção de contato"
               type="text"
               register = {register("contact")}
               />
               <div>
                  <h3 className="label">Selecionar módulo</h3>
                  <select className="placeholder"  {...register("course_module")}>
                     <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                     <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                     <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                     <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                  </select>
               </div>
               <button
                  className={`buttonRegister ${isValid ? 'validButton' : 'invalidButton'}`}
                  type="submit"
                  disabled={!isValid}
                  >Cadastrar
               </button>
            </div>
        </form>
      </section>
   )
}