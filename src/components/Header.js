import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
// Add the solid (fas) icon library to the Font Awesome library
library.add(fas);

const Header = () => {
  const [logbtn, setlogbtn] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  console.log("header rendered");
  useEffect(() => {
    console.log("usefeffect called");
  }, []);

  return (
    <div className="header flex flex-wrap md:flex-nowrap justify-between bg-blue-50 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="nav-items flex-wrap md:flex-nowrap items-center">
        <ul className="flex flex-wrap md:flex-nowrap p-4 m-4">
          <li key="home" className="px-4">
            <Link to="">Home</Link>
          </li>
          <li key="about" className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li key="contact" className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li key="grocery" className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li key="cart" className="px-4">
            <Link to="/cart">Cart</Link>
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> (
            {cartItems.length} items)
          </li>

          <li key="status" className="px-4">
            onlineStatus: {onlineStatus == true ? "🟢" : "🔴"}
          </li>
          <button
            onClick={() => {
              logbtn === "login" ? setlogbtn("logout") : setlogbtn("login");
            }}
            className="login"
          >
            {logbtn}
          </button>
          <li key="user" className="px-4">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
