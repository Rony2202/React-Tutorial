import { useEffect } from "react";


const Reastaurantmenu = () => {

    useEffect(() => {
       fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data =await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.5276416&lng=76.2144349&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json =await data.json();
        console.log(json);
    }

    return (
        <div className="menu">
            <h1>Name fo the reastuarent</h1>
            <h2>menu</h2>
            <ul>
                <li>Briyani</li>
                <li>Meals</li>
                <li>Non veg Meals</li>
            </ul>

        </div>
    )
}

export default Reastaurantmenu;