import { useState, useEffect } from "react";
import { GET_RESTURAUNT_DETAILS } from "../config";

const useResturauntHook = (id) => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(GET_RESTURAUNT_DETAILS + id);
    const jsonData = await data.json();
    setRestaurantData(jsonData);
  }
  return restaurantData;
};

export default useResturauntHook;
