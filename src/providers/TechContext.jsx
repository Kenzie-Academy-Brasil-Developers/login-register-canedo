import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechContext = createContext({})

export const TechProvider = ({children}) => {
  const [CardList, setCardList] = useState([]);
  const [editingScrap, setEditingScrap] = useState(null);
  const { user } = useContext(UserContext)

  useEffect(() => {
    const getScraps = async () => {
       try {
          const { data } = await api.get("/techs");
          setCardList(data);
          console.log(data)
       } catch (error) {
          console.log(error);
       }
    };
    getScraps();
 }, []);
  
  const cardCreate = async (formData) => {
    try {
      const token = localStorage.getItem("token");

     const newScrap = {
        title: formData.title,
        status: formData.status,
     };

     const { data } = await api.post("/users/techs", newScrap, {
        headers: {
           Authorization: `Bearer ${token}`,
        },
     });
     console.log(newScrap)

     setCardList([...CardList, data ]);

     toast.success("Scrap adicionado com sucesso!");

  } catch (error) {
     console.log(error);
  }
};

const deleteScrap = async (deletingId) => {
  try {
     const token = localStorage.getItem("token");

     await api.delete(`/users/techs/${deletingId}`, {
        headers: {
           Authorization: `Bearer ${token}`
        }
     })

     const newScrapList = CardList.filter(scrap => scrap.id !== deletingId);
     setCardList(newScrapList);
     toast.success("Scrap excluido com sucesso!");
  } catch (error) {
     console.log(error);
  }
}

const editScrap = async (formData) => {
  try {
     const token = localStorage.getItem("token");
     
     const { data } = await api.patch(`/users/techs/${editingScrap.id}`, formData, {
        headers: {
           Authorization: `Bearer ${token}`,
        },
     })

     const newScrapList = CardList.map(scrap => {

        if(scrap.id === editingScrap.id){
           return data;
        } else {
           return scrap;
        }
     })

     setCardList(newScrapList);         
     setEditingScrap(null);

     toast.success("Scrap editado com sucesso!");

  } catch (error) {
     console.log(error)
  }
}


  return(
    <TechContext.Provider value={{ cardCreate, CardList, deleteScrap, editScrap, editingScrap, setEditingScrap  }}>
      {children}
    </TechContext.Provider>
  )
}
