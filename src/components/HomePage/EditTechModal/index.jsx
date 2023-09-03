import { useContext, useEffect } from "react"; // Importe useEffect
import { TechContext } from "../../../providers/TechContext";
import { useForm } from "react-hook-form";
import styles from "./style.module.scss";

export const EditTechModal = ({ closeModal, scrap }) => {
  const { register, handleSubmit } = useForm();
  const { editingScrap, setEditingScrap, editScrap } = useContext(TechContext);

  const submit = (formData) => {
    editScrap(formData);
    closeModal();
  };

  useEffect(() => {
    setEditingScrap(scrap);
  }, [scrap]); 

  return (
    <div role="dialog" className={styles.modalOverlayEdit}>
      <form onSubmit={handleSubmit(submit)} className={styles.modalAddCard}>
        <div className={styles.modalDivPrimary}>
          <h2 className="title1">Tecnologia Detalhes</h2>
          <button onClick={closeModal} className="placeholder">
            X
          </button>
        </div>
        <div className={styles.modalDivSecundary}>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Typescript"
            defaultValue={editingScrap ? editingScrap.title : ""}
            className={styles.modalInput}
            {...register("title")}
          />
          <h3 className="label">Selecionar status</h3>
          <select
            name=""
            defaultValue={editingScrap ? editingScrap.status : ""}
            className={styles.modalSelect}
            {...register("status")}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button className={styles.modalButton} type="submit"  onClick={() => {setEditingScrap(scrap.id)}}>
            Salvar alterações
          </button>
        </div>
      </form>
    </div>
  );
};
