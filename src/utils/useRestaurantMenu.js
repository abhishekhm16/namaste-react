import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

 
const useRestaurantMenu = (restId) => {
  const [RestroInfo, setRestroInfo] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
 
  useEffect(() => {
    if (restId) {
      fetchMenu();
    }
  }, [restId]);
 
  const fetchMenu = async () => {
  
    try {
      const res = await fetch(MENU_API + restId);
      console.log(res);
      if (!res.ok) {
        console.log("failed tab")
        throw new Error("Failed to fetch restaurant menu data");
      }
      console.log("success tab");
      const json = await res.json();
      setRestroInfo(json.data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } 
  };

  return { RestroInfo }; // Return loading and error states
};
export default useRestaurantMenu;
