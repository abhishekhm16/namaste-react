import { CDN_URL } from "../utils/constants";

const RestaurantCard = (prop) => {
  const { resData } = prop; 
  // const { resData, propdrill } = prop; 2
  console.log(resData);

  const { name, cuisines, cloudinaryImageId, type, avgRating } = resData; //optional chaining for destructuring
  return (
    <>
      <div data-testid="resCard" className="m-4 p-4 w-[250px] min-h-400px bg-slate-50 rounded-lg hover:bg-blue-50">
        <img
          component="img"
          height="140"
          src={CDN_URL + cloudinaryImageId}
          alt={type}
        />
        <h1 className="font-bold py-2">{name}</h1>
        <h3>{avgRating}</h3>
        <p variant="body2" color="text.secondary">
          {cuisines.join(" ,")}
        </p>
        {/* <h6>{propdrill}</h6> */}
      </div>
    </>
  );
};

//higher order component which takes restaurantcard as input and return an output with promoted restrautrantcard

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2  bg-black text-white rounded-md shadow p-1">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
