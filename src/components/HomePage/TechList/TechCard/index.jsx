import editIcon from "../../../../assets/edit.svg";
import deleteIcon from "../../../../assets/delete.svg";
import styles from "./style.module.scss";
import { useContext, useState } from "react";
import { EditTechModal } from "../../EditTechModal";
import { TechContext } from "../../../../providers/TechContext";


export const TechCard = ({ scrap }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { deleteScrap } = useContext(TechContext)

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <li className={styles.cardBox} key={scrap.id}>
      <h3 className="textCard">{scrap.title}</h3>
      <div>
        <p className="text1">{scrap.status}</p>
        <button>
          <img src={editIcon} alt="Editar" onClick={openModal}/></button>
        <button onClick={() => deleteScrap(scrap.id)} >
          <img src={deleteIcon} alt="Delete" /></button>
      </div>
      {isModalOpen && <EditTechModal closeModal={closeModal} />}
    </li>
  );
};
