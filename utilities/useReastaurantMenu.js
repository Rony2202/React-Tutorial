import { useEffect, useState } from "react";
import { MENU_API } from "../../utilities/constant";



const useReastaurantMenu = (resid) => {

    const {resinfo, setResinfo} =  useState(null);

    useEffect(() =>{
        fetchData()

    }, []);
   
    const fetchData = async () =>{
        const data = await fetch(MENU_API + resid);
        const json = await data.json();
        setResinfo(json);
    };
   
    return resinfo;

 };    


 export default useReastaurantMenu;