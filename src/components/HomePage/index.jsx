import Logo from "../../assets/Logo.svg"
import "./style.scss"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../providers/UserContext"
import { TechList } from "./TechList"
import { TechProvider } from "../../providers/TechContext"

export const Home = () => {
  const { user, userLogout } = useContext(UserContext);
  
   return(
    <>
        <header>
            <img src={Logo} alt="logo Kenzie"/>
            <button onClick={() => userLogout()}>Sair</button>
        </header>
        <main>
          <div className="containerPrimary">
            <h2 className="title1">Olá, {user?.name}</h2>
            <p className="text1">{user?.course_module}</p>
          </div>
          <div className="containerSecundary">
          <TechProvider>
            <TechList/>
          </TechProvider>
          </div>
        </main>
    </>
  )
}