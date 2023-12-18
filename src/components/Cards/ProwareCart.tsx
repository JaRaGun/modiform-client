import React from "react";
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
}) => {
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
  };

  // const navigate = useNavigate();
  const { studentIdRedux } = useAppSelector((state) => state.user);
  const handleCart = async () => {
    // Dispatch addToCart action with the new item
    await dispatch(addToCartRedux(newItem));
    await addToCartFirebase(studentIdRedux, newItem);
    // You can also show a notification or perform other actions if needed
    Swal.fire("Item added to cart!", "", "success");

    // Navigate to the cart page if needed
    // navigate("/cart");
  };

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
              ADD TO CART
            </button>
          ) : (
            <button
              onClick={handleCart}
              className={`px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600`}
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProwareCart;
