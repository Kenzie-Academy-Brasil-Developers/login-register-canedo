import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");

    const getUser = async () => {
       try{
          setLoading(true);
          const { data } = await api.get("/profile", {
             headers: {
                Authorization: `Bearer ${token}`
             }
          });
          setUser(data);
          navigate("/home");
       } catch (error) {
          console.log(error);
       } finally {
          setLoading(false);
     }
    }

    if(token){
       getUser();
    }
 }, [])

  const userLogin = async (formData) => {
     try {
      setLoading(true);
        const { data } = await api.post("/sessions", formData);
        setUser(data.user)
        localStorage.setItem("token", data.token);
        navigate("/home");
     } catch (error) {
        toast.error("Ocorreu um erro ao fazer o login. Verifique suas credenciais e tente novamente.");
     } finally {
      setLoading(false);
 }
  }

  const userRegister = async (formData ) => {
     try {
         setLoading(true);
        await api.post("/users", formData);
        navigate("/");
        toast.success("Usuário registrado com sucesso!");
      } catch (error) {
        toast.error("Ocorreu um erro ao registrar o usuário.")
      } finally {
         setLoading(false);
    }
  }

  const userLogout = () => {
     setUser(null);
     navigate("/");
     localStorage.removeItem("token");
     toast.warning("Deslogando...")
  }

  return(
    <UserContext.Provider value={{ loading, user, userLogin, userRegister, userLogout }}>
      {children}
    </UserContext.Provider>
  )
} 