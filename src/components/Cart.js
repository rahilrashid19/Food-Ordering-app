import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cardData = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="h-[76vh]">
      <h1 className="flex justify-center text-3xl text-gray-700 font-serif font-bold">
        Item in Cart
      </h1>
      <button
        className="border rounded bg-red-800 p-2 m2 text-white float-right"
        onClick={() => {
          handleClearCart();
        }}
      >
        Clear Cart
      </button>
      <div className="flex mt-5 p-2 space-x-4">
        {cardData.map((card) => {
          return (
            <div key={card.dish.info.id} className="w-52 h-40">
              <CartCard {...card.dish.info} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
