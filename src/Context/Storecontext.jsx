import { Storecontext } from "./StoreContextValue";
import { food_list } from "../assets/assets";
import { useEffect, useState } from "react";

const StorecontextProvider = (props) =>{

    const [cardItems,setCardItems] = useState({});
    const addtoCard = (itemid) =>{
       if(!cardItems[itemid]){
        setCardItems(prev => ({...prev,[itemid]:1}))
       }
       else{
        setCardItems(prev => ({...prev,[itemid]:prev[itemid]+1}))
       }
    }
    const removeFromCard = (itemid) =>{
        setCardItems((prev) =>({...prev,[itemid]:prev[itemid]-1}) )
    }
  useEffect(()=>{
    console.log(cardItems);
  },[cardItems])
    const contextValu = {
        food_list,
        cardItems,
        setCardItems,
        addtoCard,
        removeFromCard

    }
    return (
        <Storecontext.Provider value={contextValu}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default StorecontextProvider;

