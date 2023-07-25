import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { additem } from "../utils/slices/cartSlice";

const AccordionItemList = ({ items }) => {
  const { loggedInUser } = useContext(UserContext);
  console.log(items);
  const dispatch = useDispatch();
  function handleAddItem(item) {
    dispatch(additem(item));
  }
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="border-b-2  m-2 p-2  text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className=" py-2">
                <h1>user:{loggedInUser}</h1>
                <span>{item.card.info.name}</span>
                <span>₹ {item.card.info.price / 100}</span>
              </div>

              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-1 mx-12  bg-black text-white rounded"
                  onClick={() => {
                    return handleAddItem(item);
                  }}
                >
                  Add+
                </button>
              </div>
              <div>
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className=" w-full"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default AccordionItemList;
