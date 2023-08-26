import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { HomePage } from "../pages/HomePage"
import { PrivateRoutes } from "./PrivateRoutes"


export const RoutesMain = () => {
  return(
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route element={<PrivateRoutes/>}>
        <Route path="/home" element={<HomePage/>} />
      </Route>
    </Routes>
  )
}