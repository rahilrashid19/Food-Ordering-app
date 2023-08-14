import ResturantCardComponent from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shmimmer";
import { Link } from "react-router-dom";
/*
useState hook is a normal javascript function

it returns us an array in which first element is the state variable and second element is the function to update that variable.
in the second argumnet which is a function we pass the state variable..


useEffect hook is also a normal javascript function...
it takes two parameters , first one is call back function , and second one is dependency array...

******* NOTE *****************
1. if there is no dependency array , useEffect will be called on every render after initial rendering..

2. if there is a dependency array , useEffect will be called only after first render... (initial rendering)...

3. if there is a dependency array with some state variable or props in it , useEffect will be called every time the state variable changes after the initial render....

****NOTE******

wherever you change the state variable , it triggeres the reconciliation process and re renders the component
*/

const BodyComponent = () => {
  //   let searchTxt = "KFC"; === const [searchText , setSearchText] = useState("KFC")
  function filterData(searchText, resturants) {
    const flterData = resturants.filter((res) => {
      return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
    });
    return flterData;
  }

  const [searchText, setSearchText] = useState("");
  const [resturants, setResturants] = useState([]);
  const [flterResturants, setFlterResturants] = useState([]);

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9713073&lng=77.5920295&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

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
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          name="search-fltr"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            const data = filterData(searchText, resturants);
            setFlterResturants(data);
          }}
        >
          Search Resturants
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
