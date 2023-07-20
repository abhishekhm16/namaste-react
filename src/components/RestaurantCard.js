import { CDN_URL } from "../utils/constants";

const RestaurantCard = (prop) => {
  const { resData, propdrill } = prop; //2

  const { name, cuisines, cloudinaryImageId, type, avgRating } = resData?.data; //optional chaining for destructuring
  return (
    <>
      <div className="m-4 p-4 w-[250px] h-[300px] bg-slate-50 rounded-lg hover:bg-blue-50">
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

//higher order component which takes restrorantcard as input and return an output with promoted restrautrantcard

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
