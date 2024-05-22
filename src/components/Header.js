import { LOGO_URL } from "../../utilities/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utilities/useOnlineStatus";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState ("Login");


  const OnlineStatus = useOnlineStatus();



  return (
    <div className="Header">
      <div className="Logo-container">
        <img className="Logo" src={LOGO_URL} />
      </div>
      <div className="Navitems">
        <ul>
          <li>
            Online Status: {OnlineStatus ? '🟢' : '🔴' }
            </li>
          <li>
          <Link to = "/">Home</Link>
            </li>
          <li>
            <Link to = "/about">About</Link>
            </li>
          <li>
          <Link to = "/contact">Contact us</Link>
            </li>
            <li>
          <Link to = "/grocery">Grocery</Link>
            </li>
          <li>Cart</li>
          <button className="Login" onClick={() => { btnNameReact === "Login" ?setBtnNameReact ( "Logout") : setBtnNameReact ("Login") ;}}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
