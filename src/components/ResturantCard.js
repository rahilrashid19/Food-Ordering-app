import { CDN_IMG_URL } from "../config";

const ResturantCardComponent = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
}) => {
  return (
    <div className="cards">
      <img src={CDN_IMG_URL + cloudinaryImageId} alt="" />
      <h1>{name}</h1>
      <h4>{avgRating} stars</h4>
      <h6>{cuisines.join(" , ")}</h6>
    </div>
  );
};

export default ResturantCardComponent;
