import ResturantCardComponent from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/commonUtil";
import { GET_RESTURAUNT_CARDS } from "../config";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [resturants, setResturants] = useState([]);
  const [flterResturants, setFlterResturants] = useState([]);

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const data = await fetch(GET_RESTURAUNT_CARDS);

    const json = await data.json();

    setResturants(
      json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFlterResturants(
      json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return (
    <>
      <div className="search-container flex items-center space-x-2">
        <input
          className="search-bar px-3 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          name="search-fltr"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={() => {
            const data = filterData(searchText, resturants);
            setFlterResturants(data);
          }}
        >
          Search
        </button>
      </div>

      {flterResturants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="resturant-cards">
          {flterResturants?.map((res) => {
            return (
              <Link to={"/resturant/" + res.info.id} key={res.info.id}>
                {" "}
                <ResturantCardComponent {...res.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default BodyComponent;
