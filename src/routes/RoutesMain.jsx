import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { HomePage } from "../pages/HomePage"
import { useState } from "react"



export const RoutesMain = () => {
  const [user, setUser] = useState(null)
  
  
  return(
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage setUser={setUser}/>} />
      <Route path="/" element={<HomePage/>} />
    </Routes>
  )
}