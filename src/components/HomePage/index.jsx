import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import "./style.scss"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { toast } from "react-toastify"

export const Home = () => {
  const navigate = useNavigate()

  let [name, setName] = useState("")
  let [courseModule, setCourseModule] = useState("")
  
  const handleExitClick = () => {
    localStorage.removeItem("token");
    navigate("/")
  }

  const getUserInfo = async () => {
    try {
      const token = localStorage.getItem("token")
      if (token) {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const user = response.data.name
        const course = response.data.course_module
        setName(user)
        setCourseModule(course)
      }
    } catch (error) {
      toast.error("Erro ao obter informações do usuário:")
    }
  }

  useEffect(() => {
    if (name && courseModule) {
      toast.success(`Bem-vindo ${name}! Login realizado com sucesso`);
    }
  }, [name, courseModule]);

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