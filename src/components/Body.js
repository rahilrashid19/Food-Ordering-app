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

  function filterData(searchText, restaurants) {
    const fltrDt = restaurants.filter((dt) => {
      return dt.info.name.includes(searchText);
    });
    return fltrDt;
  }

  function toggle(correct) {
    if (correct === "true") {
      return "false";
    } else {
      return "true";
    }
  }

  const [correct, setCorrect] = useState("true");

  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restrauntList);
  return (
    <>
      <div className="search">
        <input
          type="text"
          name="search-fltr"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search Resturants
        </button>
      </div>
      <h1
        onClick={() => {
          const data = toggle(correct);
          setCorrect(data);
        }}
      >
        {correct}
      </h1>
      <div className="resturant-cards">
        {restaurants.map((res) => {
          return <ResturantCardComponent {...res.info} key={res.info.id} />;
        })}
      </div>
    </>
  );
};

export default BodyComponent;
