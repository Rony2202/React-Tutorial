import { useEffect, useState } from "react";


const useOnlineStatus = () => {

    const [OnlineStatus,setOnlineStatuse] = useState(true);


    useEffect(() =>{

        window.addEventListener("offline", () => {
            setOnlineStatuse(false); 
        });

        window.addEventListener("online", () => {
            setOnlineStatuse(true); 

        });


    }, []);


    return OnlineStatus;
}

export default useOnlineStatus;