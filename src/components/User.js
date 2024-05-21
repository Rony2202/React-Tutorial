import { useState } from "react";


const User = ({ name }) => {

    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {

    }, []);

        

    return (
        <div className="User-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2  }</h1>
            <h2>Name: {name}</h2>
            <h2>Location: Thrissur</h2>
            <h2>Contact: 8078059674</h2>
        </div>
    );
};  

export default User;