import { useState, useEffect } from "react";
import { CDN_IMG_URL } from "../config";
import { useParams } from "react-router";
import Shimmer from "./Shmimmer";

const ResturantDetails = () => {
  const [resturantData, setResturantData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getResturantDetails();
  }, []);

  async function getResturantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9713073&lng=77.5920295&restaurantId=" +
        id
    );
    const jsonData = await data.json();
    setResturantData(jsonData);
  }

  return resturantData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <img
        className="res-logo"
        src={
          CDN_IMG_URL +
          resturantData?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
        }
        alt=""
      />
      <h1>{resturantData?.data?.cards[0]?.card?.card?.info?.name}</h1>
      <h1>
        {resturantData?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </h1>
      <h1>{resturantData?.data?.cards[0]?.card?.card?.info?.areaName}</h1>
      <h1>
        {resturantData?.data?.cards[0]?.card?.card?.info?.avgRating} stars
      </h1>
      <h1>{resturantData?.data?.cards[0]?.card?.card?.info?.city}</h1>
    </>
  );
};

export default ResturantDetails;
