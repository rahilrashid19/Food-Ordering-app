import React from "react";
import { CDN_IMG_URL } from "../config";

const CartCard = ({ name, defaultPrice, imageId, price }) => {
  return (
    <div className="flex border border-gray-300 shadow-md rounded-lg w-52">
      <div className="h-80">
        <img
          src={CDN_IMG_URL + imageId}
          alt=""
          className="object-cover w-full h-40"
        />
        <div className="p-4 md">
          <h1 className="text-md mb-2 text-ellipsis">Item Name: {name}</h1>
          <p className="text-gray-600 mb-2 font-mono font-semibold">
            Price: {defaultPrice ? defaultPrice / 100 : price / 100}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
