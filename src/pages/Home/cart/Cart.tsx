/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../../../components/navbar/Navbar";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../utils/redux/hooks";
import {
  removeFromCartRedux,
  updateItemInCartRedux,
} from "../../../utils/redux/slice/cartSlice";
import CheckOutButton from "./Checkout/CheckOutButton";
import { removeToCartFirebase } from "../../../firebase/services/index";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const { studentIdRedux } = useAppSelector((state) => state.user);
  // Create a state variable for the quantity of each item
  // Create a state variable for the quantity of each item
  const [quantities, setQuantities] = useState(
    cartItems.map((item) => item.quantity) // Initialize quantities to the current quantity of each item
  );
  // Function to handle quantity changes
  const handleQuantityChange = (index: number, delta: number) => {
    setQuantities((prevQuantities: any) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += delta;

      // Ensure the quantity does not go below 1
      if (newQuantities[index] < 1) {
        newQuantities[index] = 1;
      }

      // Dispatch the updateItemInCartRedux action with the updated quantity
      dispatch(
        updateItemInCartRedux({
          id: cartItems[index].id,
          quantity: newQuantities[index],
        })
      );

      return newQuantities;
    });
  };
  return (
    <div>
      <Navbar />

      <div className="flex flex-col justify-between my-10 space-x-0 md:space-x-12 md:flex-row">
        <div className="w-full md:w-2/3">
          {cartItems.length > 0 ? (
            cartItems.map((item: any, index: any) => (
              <div
                key={index}
                className="px-4 py-5 mb-5 shadow-md md:px-6 md:ml-5"
              >
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 md:w-1/2 ">
                    <div className="relative h-[450px] shadow-md">
                      <img
                        src={item.urlPicture}
                        alt="ITEM PICTURE"
                        className="object-contain w-full h-full "
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2 ">
                    <div className="pb-6 mb-8 border-b border-gray-500">
                      <span className="text-2xl font-bold text-rose-500">
                        PRODUCT DETAILS
                      </span>
                      <h2 className="mt-2 mb-6 text-xl md:text-xl">
                        {item.itemName}
                      </h2>
                      <p className="mt-2 mb-6 text-xs md:text-xl">
                        {item.itemCode}
                      </p>
                      <p className="mb-5 text-2xl font-semibold text-gray-700">
                        Size: {""}
                        <span>{item.itemSize}</span>
                      </p>

                      <p className="inline-block text-2xl font-semibold text-gray-700">
                        Unit Price: {""}
                        <span>₱{item.itemPrice}</span>
                      </p>
                    </div>

                    <div className="pb-6 mb-8 border-b border-gray-500">
                      <div className="flex flex-wrap items-center ">
                        <div className="mb-4 mr-2 font-bold lg:mb-0">
                          Quantity:
                        </div>
                        <div className="mb-4 mr-4 lg:mb-0">
                          <div className="w-28">
                            <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                              <button
                                onClick={() => handleQuantityChange(index, -1)}
                                disabled={quantities[index] === 1} // Disable the button when the quantity is one
                                className={`w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300 ${
                                  quantities[index] === 1
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                                }`}
                              >
                                <span className="m-auto text-2xl font-thin">
                                  -
                                </span>
                              </button>
                              <input
                                value={quantities[index]}
                                onChange={(e) =>
                                  handleQuantityChange(
                                    index,
                                    Number(e.target.value) - quantities[index]
                                  )
                                }
                                className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none focus:outline-none text-md hover:text-black"
                              />
                              <button
                                onClick={() => handleQuantityChange(index, 1)}
                                className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300"
                              >
                                <span className="m-auto text-2xl font-thin">
                                  +
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center">
                      <div className="mb-4 mr-4 font-bold lg:mb-0">
                        Total Price: {""}
                        <span>₱{item.itemPrice * quantities[index]}.00</span>
                      </div>
                      {/* Delete Item Button*/}
                      <div className="mb-4 lg:mb-0">
                        <button
                          onClick={() =>
                            dispatch(
                              removeFromCartRedux(item.id),

                              removeToCartFirebase(
                                item.itemCode,
                                studentIdRedux
                              )
                            )
                          }
                          className="flex items-center justify-center w-full h-10 p-2 text-red-500 border border-gray-300 lg:w-11 hover:text-white hover:bg-red-500 hover:border-red-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="mb-4 text-4xl md:text-6xl font-semibold text-red-500">
                No Items in Cart
              </h1>
              <p className="mt-4 text-gray-600">
                Let's get you back{" "}
                <a href="/proware" className="text-blue-500">
                  Proware Shop
                </a>
              </p>

              <p className="mt-4 text-gray-600">
                <a href="/receipt" className="text-blue-500">
                  View your invoice
                </a>
              </p>
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="w-full mt-10 md:mt-0 md:w-1/3">
            <CheckOutButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
