import { useContext } from "react"
import { TechContext } from "../../../providers/TechContext"
import { useForm } from "react-hook-form"
import styles from "./style.module.scss";

export const CreateTechModal = ({ closeModal }) => {
  const { register, handleSubmit } = useForm()

  const { cardCreate } = useContext( TechContext )

  const submit = (formData) => {
    cardCreate(formData)
    closeModal()
  }

  return (
    <div role="dialog" className={styles.modalOverlay}>
      <form onSubmit={handleSubmit(submit)} className={styles.modalAddCard}>
        <div className={styles.modalDivPrimary}>
          <h2 className="title1">Cadastrar Tecnologia</h2>
          <button onClick={closeModal} className="placeholder">
            X
          </button>
        </div>
        <div className={styles.modalDivSecundary}>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Typescript"
            className={styles.modalInput}
            {...register("title")}
          />
          <h3 className="label">Selecionar status</h3>
          <select
            name="status" 
            className={styles.modalSelect}
            {...register("status")} 
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button className={styles.modalButton}>Cadastrar Tecnologia</button>
        </div>
      </form>
    </div>
  );
};