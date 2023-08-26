import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes/RoutesMain"
import "./styles/index.scss"
import { Loading } from "./components/Loading";
import { UserContext } from "./providers/UserContext";
import { useContext } from "react";

function App() {
  const { loading } = useContext(UserContext)
  return (
    <>
      {loading ? <Loading /> : <RoutesMain />}
      <ToastContainer />
    </>
  )
}

export default App
