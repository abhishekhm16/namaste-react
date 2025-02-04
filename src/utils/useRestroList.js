import { useEffect } from "react";
import { SWIGGY_API } from "./constants";
import { useState } from "react";


const useRestroList = ()=>{
 const [RestroList, setRestroList] = useState([]);
 const [filteredRestroList, setFilteredRestroList] = useState([]);
 

useEffect(()=>{
fetchData();
 },[]);

const fetchData = async()=>{
 
  const data = await fetch(
    SWIGGY_API, //API URL
    {
      // Defining method type as POST
      method: "GET",
      // Fetch knows, what type of data are we dealing with
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // Data needs to be parsed into JSON
    }
  );
  const json = await data.json();
  console.log(json);
  setRestroList(
    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  setFilteredRestroList(
    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
}

return {RestroList,filteredRestroList};
}

export default useRestroList;