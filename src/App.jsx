import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes/RoutesMain"
import "./styles/index.scss"

function App() {
  return (
    <>
      <RoutesMain/>
      <ToastContainer />
    </>
  )
}

export default App
