import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import "./style.scss"

export const Home = () => {
  const navigate = useNavigate()
  
  const handleExitClick = () => {
    navigate("/login")
  };
  
  return(
    <>
      <header>
          <img src={Logo} alt="logo Kenzie"/>
          <button onClick={handleExitClick}>Sair</button>
      </header>
      <main>
        <div className="containerPrimary">
          <h2 className="title1">Olá, Samuel</h2>
          <p className="text1">Primeiro Modulo</p>
        </div>
        <div className="containerSecundary">
          <h2 className="title1">Que pena! Estamos em desenvolvimento :(</h2>
          <p className="title2">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>
      </main>
    </>
  )
}