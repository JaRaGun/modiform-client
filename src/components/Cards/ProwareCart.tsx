import React, { useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
import { getCartItems } from "../../pages/Home/cart/utils";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface ModiDescription {
  id: string;
  uniPicture: string;
  uniName: string;
  uniPrice: number;
  uniSize: string;
  uniStocks: number;
  uniCategory: string;
}

const ProwareCart: React.FC<ModiDescription> = ({
  id,
  uniPicture,
  uniName,
  uniPrice,
  uniSize,
  uniStocks,
  uniCategory,
}) => {
 

  const newItem = {
    id: id,
    urlPicture: uniPicture,
    itemName: uniName,
    itemPrice: uniPrice,
    itemSize: uniSize,
  };



  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm max-h-[1000px] hover:shadow-xl">
      <div className="relative">
        <img
          className="w-96 h-[500px] object-cover"
          src={uniPicture}
          alt="Product Image"
        />
        <div className="absolute top-0 right-0 bg-yellow-500 text-black px-2 py-1 m-2 rounded-md text-sm font-bold">
          {uniCategory}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold mb-2">{uniName}</h3>
          <h3 className="text-lg font-bold mb-2">Size: {uniSize}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          {uniStocks} pieces available
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">₱ {uniPrice}</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-none">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProwareCart;
