import Reastaurantcard from "./Reastaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //Local satate variable - superpowerful variable
  const  [ listofReasturant, setlistofreasturant ] = useState([]);
  const [filteredReasturant, setfilteredReasturant] = useState([]);

  const [searchText, setSearchText] = useState("");
// Whenever state variable updates, react triggers a reconiliaton cycle (re-renders the components)

  console.log("body rentered");

  useEffect(()=>{
  fetchData();
}, []);

const fetchData =  async () => {
  const  data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.5276416&lng=76.2144349&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

const json = await data.json();

console.log(json);
setlistofreasturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setfilteredReasturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

 
  return listofReasturant.length === 0 ? <Shimmer /> :(
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) =>{
            setSearchText(e.target.value);
          }}/>
          <button onClick={() => {
            //filter the reasturant cards and update the ui
            //searchText
            console.log(searchText);

            const filteredReasturant  = listofReasturant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

            setfilteredReasturant(filteredReasturant);

          }}>search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setlistofreasturant()
            //filter logic here
             const filteredList = listofReasturant.filter(
              (res) => res.info.avgRatingString  >= 4.5
            );
            setlistofreasturant(filteredList);  
          }}
        >
          Top Rated Reasturants
        </button>
      </div>
      <div className="res-container">
        {filteredReasturant.map((restaurant) => (
         <Link key={restaurant.info.id} to = {"reastaurents/" + restaurant.info.id}> <Reastaurantcard  resData={restaurant} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;