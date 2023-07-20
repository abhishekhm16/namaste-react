import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import Button from "@mui/material/Button";

const Header = () => {
  const [logbtn, setlogbtn] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  console.log("header rendered");
  useEffect(() => {
    console.log("usefeffect called");
  }, []);

  return (
    <div className="header flex justify-between bg-blue-50 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
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
          <li key="user" className="px-4">
            {loggedInUser}
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
