import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import useRestroList from "../utils/useRestroList";

// import RestList from "../utils/mockData";

const Body = function () {
  // const [RestroList, setRestroList] = useState([]);
  // const [filteredRestroList, setFilteredRestroList] = useState([]);
  const [Searchtext, setSearchtext] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setusername } = useContext(UserContext);
  const { RestroList, filteredRestroList } = useRestroList();
  // const propname = "yolo";  prop drilling example
  console.log(" body rendered after click", RestroList);


  //using async await latest practise

  // if (RestroList.length === 0) {
  //   return <Shimmer />;
  // } //conditional rendering

  if (onlineStatus == false) {
    return <h1>Not connected to Internet</h1>;
  }

  return RestroList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex flex-wrap md:flex-nowrap">
        <button
          className=" bg-gray-50 px-4 py-2  m-4"
          onClick={() => {
            const filtered = RestroList.filter(
              (res) => res?.info?.avgRating > 4.3
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
            data-testid="Inputbox"
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(Searchtext);
              const searchfilter = RestroList?.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(Searchtext.toLowerCase());
              });
                setFilteredRestroList(searchfilter);
              }}
              >
              Search
              </button>
            </div>

            <div className="flex justify-center items-center m-4">
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

      <div className="flex mx-auto w-3/4 flex-wrap">
            {/* <RestaurantCard
         resData={RestList[0]} //passing props dynamically 3
         //passing props to a component
         // resName="kfc"
         // cuisine="burger"
         // img="https://b.zmtcdn.com/data/pictures/chains/9/51039/e3e149c669fa5d2e3f57221a2c394697_o2_featured_v2.jpg?output-format=webp"
       /> */}
        {filteredRestroList?.map((resData) => (
          <Link key={resData.info.id} to={"/restaurants/" + resData.info.id}>
            {resData?.info.promoted ? (
              <RestaurantCardPromoted resData={resData?.info} />
            ) : (
                 // <RestaurantCard resData={resData} propdrill={propname} />
              <RestaurantCard resData={resData?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
