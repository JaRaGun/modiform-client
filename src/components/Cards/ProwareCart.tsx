import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { getCartItems } from "../../pages/Home/cart/utils";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface ModiDescription {
  id: number;
  uniPicture: string;
  uniName: string;
  uniPrice: number;
  uniSize: string;
}

const ProwareCart: React.FC<ModiDescription> = ({
  id,
  uniPicture,
  uniName,
  uniPrice,
  uniSize,
}) => {
  const [addedToCart, setAddedToCart] = useState(() => {
    // Check if the item is already in the cart using localStorage
    const cartItems = localStorage.getItem("cartItems");
    return cartItems
      ? JSON.parse(cartItems).some((item: any) => item.id === id)
      : false;
  });

  const newItem = {
    id: id,
    urlPicture: uniPicture,
    itemName: uniName,
    itemPrice: uniPrice,
    itemSize: uniSize,
  };

  const addToCartFunction = () => {
    try {
      const cartItems = localStorage.getItem("cartItems");
      const updatedCart = cartItems ? JSON.parse(cartItems) : [];

      // Check if the item is already in the cart
      const isItemInCart = updatedCart.some((item: any) => item.id === id);
      if (!isItemInCart) {
        updatedCart.push(newItem);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        setAddedToCart(true);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Item added to cart",
          showConfirmButton: false,
          timer: 2000,
        });
        console.log("success");
        console.log(getCartItems);
      } else {
        // If item is already in cart, display a message or handle it as needed
        console.log("Item is already in the cart");
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div className="px-10">
      <div className="flex py-5">
        <Card className="w-80 bg-yellow-100" placeholder={undefined}>
          <CardHeader
            shadow={false}
            floated={false}
            className="h-80"
            placeholder={undefined}
          >
            <img
              src={uniPicture}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody placeholder={undefined}>
            <div className="mb-2 flex justify-between text-center">
              <Typography
                color="blue-gray"
                className="font-extrabold"
                placeholder={undefined}
              >
                {uniName}
              </Typography>

              <Typography
                color="blue-gray"
                className="font-extrabold"
                placeholder={undefined}
              >
                {uniPrice}
              </Typography>
            </div>

            <div>
              <Typography
                color="blue-gray"
                className="font-bold"
                placeholder={undefined}
              >
                {uniSize}
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0" placeholder={undefined}>
            {addedToCart ? (
              <Button
                onClick={handleCart}
                ripple={false}
                fullWidth={true}
                className="bg-green-500 text-white font-semibold shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                placeholder={undefined}
              >
                View Cart &nbsp; ✔
              </Button>
            ) : (
              <Button
                onClick={addToCartFunction}
                ripple={false}
                fullWidth={true}
                className="bg-blue-500 text-black font-semibold shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                placeholder={undefined}
              >
                Add to Cart
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProwareCart;
