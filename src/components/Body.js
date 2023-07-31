import ResturantCardComponent from "./ResturantCard";
import { restrauntList } from "../config";
import { useState } from "react";
/*
useState hook is a normal javascript function

it returns us an array in which first element is the state variable and second element is the function to update that variable.
in the second argumnet which is a function we pass the state variable
*/

const BodyComponent = () => {
  //   let searchTxt = "KFC"; === const [searchText , setSearchText] = useState("KFC")
  function filterData(searchText, resturants) {
    const flterData = resturants.filter((res) => {
      return res.info.name.includes(searchText);
    });
    return flterData;
  }

  const [searchText, setSearchText] = useState("");
  const [resturants, setResturants] = useState(restrauntList);

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
            setResturants(data);
          }}
        >
          Search Resturants
        </button>
      </div>
      <div className="resturant-cards">
        {resturants.map((res) => {
          return <ResturantCardComponent {...res.info} key={res.info.id} />;
        })}
      </div>
    </>
  );
};

export default BodyComponent;
