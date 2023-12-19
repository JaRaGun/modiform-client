import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/redux/hooks";
import { addToCartRedux } from "../../utils/redux/slice/cartSlice";
import { addToCartFirebase } from "../../firebase/services";
export interface ModiDescription {
  id: string;
  uniCode: string;
  uniPicture: string;
  uniName: string;
  uniPrice: number;
  uniSize: string;
  uniStocks: number;
  uniCategory: string;
  uniClass: string;
}
const isStocksZero = (uniStocks: number) => {
  if (uniStocks === 0) {
    return true;
  }
  return false;
};

const ProwareCart: React.FC<ModiDescription> = ({
  id,
  uniCode,
  uniPicture,
  uniName,
  uniPrice,
  uniSize,
  uniStocks,
  uniCategory,
  uniClass,
}) => {
  const getItemButtonText = (itemId: string) => {
    return localStorage.getItem(`buttonText_${itemId}`) || "ADD TO CART";
  };

  const setItemButtonText = (itemId: string, text: string) => {
    localStorage.setItem(`buttonText_${itemId}`, text);
  };

  const [buttonText, setButtonText] = useState(getItemButtonText(id));

  const dispatch = useAppDispatch();

  const newItem = {
    id: id,
    itemCode: uniCode,
    urlPicture: uniPicture,
    itemName: uniName,
    itemPrice: uniPrice,
    itemSize: uniSize,
    itemCategory: uniCategory,
    quantity: 0,
    totalPrice: 0,
    itemClass: uniClass,
  };

  // const navigate = useNavigate();
  const { studentIdRedux } = useAppSelector((state) => state.user);
  const handleCart = async () => {
    if (buttonText === "VIEW CART") {
      // Handle logic for "ALREADY ADDED TO YOUR CART" scenario
      Swal.fire("ALREADY ADDED TO YOUR CART", "", "info");
    } else {
      // Dispatch addToCart action with the new item
      await dispatch(addToCartRedux(newItem));
      await addToCartFirebase(studentIdRedux, newItem);
      // Update button text and show success message
      setButtonText("VIEW CART");
      Swal.fire("Item added to cart!", "", "success");
      setItemButtonText(id, "VIEW CART"); // Save to localStorage for this specific item
    }
  };

  useEffect(() => {
    // Check if the button text was set to "VIEW CART" before for this specific item
    const savedButtonText = getItemButtonText(id);
    if (savedButtonText === "VIEW CART") {
      setButtonText("VIEW CART");
    }
  }, [id]);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm max-h-[1000px] hover:shadow-xl">
      <div className="relative">
        <img
          className="w-96 h-[500px] object-cover"
          src={uniPicture}
          alt="Product Image"
        />
        <div className="absolute top-0 right-0 px-2 py-1 m-2 text-sm font-bold text-black bg-yellow-500 rounded-md">
          {uniCategory}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="mb-2 text-lg font-bold">{uniName}</h3>
          <h3 className="mb-2 text-lg font-bold">Size: {uniSize}</h3>
        </div>
        <p className="mb-4 text-sm text-gray-600">
          {uniStocks} pieces available
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">₱ {uniPrice}</span>
          {isStocksZero(uniStocks) ? (
            <button
              disabled
              className={`px-4 py-2 font-bold text-white bg-gray-500 cursor-not-allowed rounded-md`}
            >
              {buttonText}
            </button>
          ) : (
            <button
              onClick={handleCart}
              className={`px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600`}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProwareCart;
