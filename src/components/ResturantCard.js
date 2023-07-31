import { CDN_IMG_URL } from "../config";

const ResturantCardComponent = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
}) => {
  return (
    <div className="cards">
      <img
        className="restaurant-card-image"
        src={CDN_IMG_URL + cloudinaryImageId}
        alt=""
      />
      <div className="restaurant-card-content">
        <h1 className="restaurant-card-name">{name}</h1>
        <h4>{avgRating} stars</h4>
        <h6>{cuisines.join(" , ")}</h6>
      </div>
    </div>
  );
};

export default ResturantCardComponent;
