import { Input } from "../Input";
import "./style.scss"

export const Login = ({}) => {
  const [title, setTitle] = useState("")
  const [number, setNumber] = useState("")

   return (
      <section>
        <h1>Kenzie Hub</h1>
        <form>
          <Input
            label="Email"
            placeholder="Digite seu email"
            type="text"
            id="title"
            value={title}
            setValue={setTitle}
         />
          <Input
            label="Senha"
            placeholder="****"
            type="number"
            id="number"
            value={number}
            setValue={setNumber}
          />
          <button>Entrar</button>
          <p>Ainda não possui uma conta?</p>
          <button>Cadastre-se</button>
        </form>
      </section>
   );
};
