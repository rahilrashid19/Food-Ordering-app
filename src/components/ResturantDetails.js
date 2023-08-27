import { CDN_IMG_URL } from "../config";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useResturauntHook from "../utils/useResturauntsHook";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestaurantDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const addItemsToCart = (dish) => {
    dispatch(addItems(dish));
  };

  const restaurantData = useResturauntHook(id);

  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col md:flex-row gap-6 h-[76vh]">
      <img
        src={
          CDN_IMG_URL +
          restaurantData?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
        }
        alt=""
        className="h-80"
      />
      <div className="p-4 md:w-1/2">
        <h1 className="text-2xl font-bold mb-2">
          {restaurantData?.data?.cards[0]?.card?.card?.info?.name}
        </h1>
        <p className="text-gray-600 mb-2">
          {restaurantData?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </p>
        <p className="text-gray-600 mb-2">
          {restaurantData?.data?.cards[0]?.card?.card?.info?.areaName}
        </p>
        <p className="text-yellow-500 mb-2">
          {restaurantData?.data?.cards[0]?.card?.card?.info?.avgRating} stars
        </p>
        <p className="text-gray-600">
          {restaurantData?.data?.cards[0]?.card?.card?.info?.city}
        </p>
        <ul className="space-y-4 border rounded-lg shadow-md p-4">
          {restaurantData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1]?.card?.card?.carousel?.map(
            (card) => (
              <li
                key={card.dish.info.id}
                className="flex items-center justify-between"
              >
                <span>{card.dish.info.name}</span>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    addItemsToCart(card);
                  }}
                >
                  Add to Cart
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
