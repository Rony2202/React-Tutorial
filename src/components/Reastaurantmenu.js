import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utilities/constant";


const Reastaurantmenu = () => {
    const [resInfo, setresInfo] = useState(null);

    const {resId} = useParams();



    useEffect(() => {
       fetchMenu();
    }, []); 

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json =await data.json ();
    
        setresInfo(json.data);
    };

   if(resInfo == null ) return <Shimmer/>;
   const {name, cuisines , costForTwoMessage} = 
   resInfo?.cards[2]?.card?.card?.info;
   
   const {itemCards} = 
   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   console.log (itemCards);
   
   return  (
       <div className="menu">
           <h1>{name}</h1>
           <p>{cuisines.join(",")} - {costForTwoMessage}</p>
           <h2>menu</h2>
           <ul>
              {itemCards.map((item) => (
              <li key={item.card.info.id}>
                 {item.card.info.name} = Rs. {item.card.info.price / 100}
              </li>
              ))}
           </ul>
   
       </div>
   )
}

export default Reastaurantmenu;