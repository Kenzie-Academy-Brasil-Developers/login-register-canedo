import { useContext, useState } from "react";
import { TechCard } from "./TechCard";
import ButtonPlusIcon from "../../../assets/ButtonPlus.svg";
import styles from "./style.module.scss";
import { CreateTechModal } from "../CreateTechModal";
import { TechContext } from "../../../providers/TechContext";

export const TechList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { CardList } = useContext(TechContext);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  console.log(CardList)
  return (
    <div className={styles.contentList}>
      <span>
        <h2 className="title2">Tecnologias</h2>
        <button onClick={openModal}>
          <img src={ButtonPlusIcon} alt="Adicionar" />
        </button>
      </span>
      <ul>
        {CardList.map(scrap => (
          <TechCard  key={scrap.id} scrap={scrap}/>
          ))}
      </ul>
      {isModalOpen && <CreateTechModal closeModal={closeModal} />} 
    </div>
  );
};
