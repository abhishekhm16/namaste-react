import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import Button from "@mui/material/Button";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import RestList from "../utils/mockData";

const Body = function () {
  const [RestroList, setRestroList] = useState([]);
  const [filteredRestroList, setFilteredRestroList] = useState([]);
  const [Searchtext, setSearchtext] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setusername } = useContext(UserContext);
  // const propname = "yolo";  prop drilling example
  console.log(" body rendered after click", RestroList);
  useEffect(() => {
    // fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING",
    //   {
    //     // Defining method type as POST
    //     method: "GET",
    //     // Fetch knows, what type of data are we dealing with
    //     // headers: {
    //     //   "Content-Type": "application/json",
    //     // },
    //     // Data needs to be parsed into JSON
    //   }
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => console.log(data));
    // using promise chaining
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestroList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestroList(json?.data?.cards[2]?.data?.data?.cards);
  }
  //using async await latest practise

  // if (RestroList.length === 0) {
  //   return <Shimmer />;
  // } //conditional rendering

  if (onlineStatus == false) {
    return <h1>Not connected to Internet</h1>;
  }

  return RestroList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <button
          className=" bg-gray-50 px-4 py-2  m-4"
          onClick={() => {
            const filtered = RestroList.filter(
              (res) => res?.data?.avgRating > 4.3
            );

            setFilteredRestroList(filtered);
          }}
          variant="contained"
        >
          Filter ratings
        </button>
        <div className="flex">
          <input
            type="text"
            value={Searchtext}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
            className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-3 m-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for Restaurants..."
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(Searchtext);
              const searchfilter = RestroList.filter((res) => {
                return res.data.name
                  .toLowerCase()
                  .includes(Searchtext.toLowerCase());
              });
              setFilteredRestroList(searchfilter);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <label>userinput:</label>
          <input
            onChange={(e) => {
              setusername(e.target.value);
            }}
            value={loggedInUser}
            type="text"
            className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-3 m-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          ></input>
        </div>
      </div>

      <div className="flex flex-wrap">
        {/* <RestaurantCard
         resData={RestList[0]} //passing props dynamically 3
         //passing props to a component
         // resName="kfc"
         // cuisine="burger"
         // img="https://b.zmtcdn.com/data/pictures/chains/9/51039/e3e149c669fa5d2e3f57221a2c394697_o2_featured_v2.jpg?output-format=webp"
       /> */}

        {filteredRestroList.map((resData) => (
          <Link key={resData.data.id} to={"/restaurants/" + resData.data.id}>
            {resData.data.promoted ? (
              <RestaurantCardPromoted resData={resData} />
            ) : (
              // <RestaurantCard resData={resData} propdrill={propname} />
              <RestaurantCard resData={resData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
