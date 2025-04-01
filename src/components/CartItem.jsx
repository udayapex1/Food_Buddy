import React, { useContext } from "react";
import FoodContext from "../context/FoodContext";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(FoodContext);

  const handleRemoveCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART", // Changed for clarity
      payload: id,
    });
  };

  const handleQuantityChange = (action) => {
    dispatch({
      type: action === "increment" ? "INCREASE_CART" : "DECREASE_CART",
      payload: item,
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg p-6 w-full max-w-2xl mx-auto rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-white">
      <img
        className="w-40 h-40 md:w-56 md:h-56 rounded-lg object-cover border-2 border-gray-200"
        src={`/food-Imgs/${item.image}`}
        alt={item.title}
      />
      <div className="flex flex-col items-center md:items-start justify-between gap-2">
        <h2 className="text-xl md:text-2xl font-bold mt-4 text-gray-800">
          {item.title}
        </h2>
        <p className="text-gray-600 font-normal text-center md:text-left">
          {item.description}
        </p>
        <h3 className="text-lg md:text-xl font-medium text-gray-900">
          ${item.price}
        </h3>
        <button
          className="mt-2 py-2 px-6 rounded-full bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition duration-300"
          onClick={() => handleRemoveCart(item.id)}
        >
          Remove Item
        </button>
        <div className="flex items-center justify-center gap-5 mt-2">
          <button
            className="border border-orange-500 py-0 px-5 text-lg rounded-md hover:bg-orange-500 hover:text-white transition duration-300"
            onClick={() => handleQuantityChange("decrement")}
            disabled={item.qty <= 1} // Disable if qty is 1
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="text-lg font-medium">Qty: {item.qty}</span>
          <button
            className="border border-orange-500 py-0 px-5 text-lg rounded-md hover:bg-orange-500 hover:text-white transition duration-300"
            onClick={() => handleQuantityChange("increment")}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
