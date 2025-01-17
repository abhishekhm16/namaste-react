import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL, RESTRO_URL } from "../utils/constants";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [RestroInfo, setRestroInfo] = useState(null);

  // console.log(restId);

  // useEffect(() => {
  //   fetchMenu();

  //   return () => {
  //     console.log("just like unmouting");
  //   };
  // }, []);

  // async function fetchMenu() {
  //   const data = await fetch(MENU_API + restId);
  //   const json = await data.json();
  //   console.log("menu data" + json);
  //   setRestroInfo(json.data);
  // }
  const { restId } = useParams();
  // const RestroInfo = useRestaurantMenu(restId); //custom hook is used
  const { RestroInfo } = useRestaurantMenu(restId);
  console.log(RestroInfo);

  const [showIndex, setShowIndex] = useState(null);

  // const { name, cuisines, costForTwo, cloudinaryImageId } =
  //   RestroInfo?.cards[0]?.card?.card?.info ?? {};

  // const { itemCards } =
  //   RestroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //     ?.card ?? {};
  // this is used if the restrolist is fetched before the api returns the data , at that time restroinfo will be empty

  if (RestroInfo === null) return;
  <Shimmer />;

  const { name, cuisines, costForTwo, cloudinaryImageId } =
    RestroInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   RestroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //     ?.card;
  // console.log(RestroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    RestroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="menu text-center ">
      <div className=" w-8/12  text-center my-4 flex justify-center mx-auto">
        <img
          className="w-full h-64"
          src={CDN_URL + cloudinaryImageId}
          alt="restroimg"
        />
      </div>
      <h1 className="text-3xl font-bold m-10 p-2">{name}</h1>
      <p className="font-medium m-4 ">
        Cuisines: {cuisines.join(",")} , Cost:{costForTwo} 
      </p>
      {/* categories Accordion code */}

      {categories.map((category, index) => {
        // console.log(category?.card?.card?.title);

        //controlled component
        return (
          <RestaurantCategory
            key={category?.card?.card?.title}
            datas={category?.card?.card}
            showItems={index == showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
