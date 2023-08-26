import Logo from "../../assets/Logo.svg"
import "./style.scss"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../providers/UserContext"

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
          <h2 className="title1">Que pena! Estamos em desenvolvimento :(</h2>
          <p className="title2">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>
      </main>
    </>
  )
}