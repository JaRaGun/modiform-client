import { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import { getCartItems, updateCartItems } from "./utils";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage when the component mounts
    const storedCartItems = getCartItems();
    setCartItems(storedCartItems);
  }, []);

  const handleDelete = (indexToRemove: number) => {
    const updatedCartItems = cartItems.filter(
      (_, index) => index !== indexToRemove
    );
    setCartItems(updatedCartItems);
    updateCartItems(updatedCartItems); // Update local storage after deletion
  };

  return (
    <div>
      <Navbar />

      <div className="px-10 mx-auto py-10">
        {cartItems.map((item: any, index: any) => (
          <div key={index} className="shadow-md px-4 mb-5 py-5 md:px-6">
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
                  <span className="text-lg font-medium text-rose-500">
                    PRODUCT DETAILS
                  </span>
                  <h2 className="mt-2 mb-6 text-xl font-bold md:text-4xl">
                    {item.itemName}
                  </h2>

                  <p className="text-2xl font-semibold text-gray-700 mb-5">
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
                    <div className="mb-4 mr-2 lg:mb-0">Quantity:</div>
                    <div className="mb-4 mr-4 lg:mb-0">
                      <div className="w-28">
                        <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                          <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
                            <span className="m-auto text-2xl font-thin">-</span>
                          </button>
                          <input
                            type="number"
                            className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none  focus:outline-none text-md hover:text-black"
                            placeholder="1"
                          />
                          <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer   hover:text-gray-700 hover:bg-gray-300">
                            <span className="m-auto text-2xl font-thin">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center">
                  <div className="mb-4 mr-4 lg:mb-0">
                    Total Price: {""}
                    <span>₱{item.itemPrice}</span>
                  </div>

                  <div className="mb-4 lg:mb-0">
                    <button
                      onClick={() => handleDelete(index)}
                      className="flex items-center justify-center w-full h-10 p-2 text-gray-500 border border-gray-300 lg:w-11 hover:text-white hover:bg-red-500 hover:border-red-500"
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
        ))}

        <div className="w-full py-5">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Summary</h2>
            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>$19.99</span>
            </div>
            <div className="flex justify-between mb-3">
              <span>Taxes</span>
              <span>$1.99</span>
            </div>
            <div className="flex justify-between mb-3">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between mb-3">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">$21.98</span>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-6 w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
