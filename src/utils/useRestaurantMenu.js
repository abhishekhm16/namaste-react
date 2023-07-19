import { MENU_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (restId) => {
  const [RestroInfo, setRestroInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(MENU_API + restId);
    console.log(data); // Check the response data in the console

    const json = await data.json();
    setRestroInfo(json.data);
  }

  return RestroInfo;
};
export default useRestaurantMenu;
