import { useAppSelector } from "../../../../utils/redux/hooks";

const CheckOutButton = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );
  // console.log(cartItems);
  return (
    <div className="w-full px-5 py-5p">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-xl font-semibold">ORDER SUMMARY</h2>

        {cartItems.map((item) => (
          <div key={item.id} className="space-y-4 text-lg">
            <h3 className="my-4">{item.itemName}</h3>
            <p>QTY: {item.quantity}</p>
            <p>SIZE: {item.itemSize}</p>
            <hr className="my-4 border-black" />
          </div>
        ))}

        <hr className="my-3" />
        <div className="flex justify-between mb-3">
          <span className="font-semibold">ORDER TOTAL</span>
          <span className="text-xl font-bold">₱ {totalPrice.toFixed(2)}</span>
        </div>
        <button className="w-full px-4 py-2 mt-6 text-white bg-blue-500 rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckOutButton;
