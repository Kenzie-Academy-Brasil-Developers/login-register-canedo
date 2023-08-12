import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import "./style.scss"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export const Home = () => {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [courseModule, setCourseModule] = useState("")
  
  const handleExitClick = () => {
    localStorage.removeItem("token");
    navigate("/login")
  }

  const getUserInfo = async () => {
    try {
      const response = await api.get("/profile")
      const { name, course_module } = response.data
      setName(name)
      setCourseModule(course_module)
    } catch (error) {
      console.error("Erro ao obter informações do usuário:", error)
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])
  
  return(
    <>
      <header>
          <img src={Logo} alt="logo Kenzie"/>
          <button onClick={handleExitClick}>Sair</button>
      </header>
      <main>
        <div className="containerPrimary">
          <h2 className="title1">Olá, {name}</h2>
          <p className="text1">{courseModule}</p>
        </div>
        <div className="containerSecundary">
          <h2 className="title1">Que pena! Estamos em desenvolvimento :(</h2>
          <p className="title2">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>
      </main>
    </>
  )
}