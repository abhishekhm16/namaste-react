import React from "react";
import { useSelector } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { clearcart, removeitem } from "../utils/slices/cartSlice";
import { CDN_URL } from "../utils/constants";

// Add the solid (fas) icon library to the Font Awesome library
library.add(fas);

function Cart() {
  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const dispatch = useDispatch();

  function HandleClearCart() {
    dispatch(clearcart());
  }

  function handleRemoveItem(itemId) {
    dispatch(removeitem(itemId));
  }
  return (
    <>
      <div className="w-5/12 m-auto p-4 text-center ">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">Cart</h1>
          <span
            onClick={() => {
              return HandleClearCart();
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-broom" />
          </span>
        </div>
        {cartItems.length == 0 && <div>cart is empty</div>}
      </div>

      <div className="w-5/12 m-auto p-4 text-center ">
        {cartItems.map((item) => {
          console.log(cartItems);
          return (
            <div
              key={item.card.info.id}
              className="border-b-2  m-2 p-2  text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className=" py-2">
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
                      return handleRemoveItem(item.card.info.id);
                    }}
                  >
                    Remove
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
    </>
  );
}

export default Cart;
