import React, { useContext, useEffect, useState } from "react";
import FoodContext from "../context/FoodContext";

const FoodCard = ({ item }) => {
  const [buttonDisable, setButtonDisable] = useState(false);
  const { btnDisable, dispatch } = useContext(FoodContext);

  useEffect(() => {
    const val = btnDisable.filter((data) => data.id === item.id);
    setButtonDisable(val.length > 0);
  }, [btnDisable, item.id]);

  const getFoodData = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
    dispatch({
      type: "BUTTON_DISABLE",
      payload: item.id,
    });
    setButtonDisable(true);
  };

  return (
    <div className="flex items-center justify-center mt-12 flex-wrap">
      <div className="flex flex-col items-center justify-center gap-2 shadow-lg p-6 w-[310px] rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <img
          className="w-full h-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-110"
          src={`/food-Imgs/${item.image}`}
          alt={item.title}
        />
        <h2 className="text-xl font-bold mt-4 text-gray-800">{item.title}</h2>
        <p className="text-gray-600 font-normal text-center">
          {item.description}
        </p>
        <h3 className="text-lg font-medium text-gray-900">${item.price}</h3>
        <button
          className={`mt-3 py-2 px-4 rounded-full text-sm font-medium transition duration-500 ease-in-out 
                      ${
                        buttonDisable
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#FF9800] text-white hover:bg-[#FF9800]/90"
                      }`}
          onClick={getFoodData}
          disabled={buttonDisable}
        >
          {buttonDisable ? "Added" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
