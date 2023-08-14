import { CDN_IMG_URL } from "../config";

const ResturantCardComponent = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
}) => {
  return (
    <div className="cards cursor-pointer hover:shadow-md">
      <div className="relative">
        <img
          className="restaurant-card-image object-cover w-full h-40"
          src={CDN_IMG_URL + cloudinaryImageId}
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="absolute bottom-0 left-0 p-3 text-white">
          <h1 className="restaurant-card-name text-lg font-semibold">{name}</h1>
          <h4 className="text-sm">{avgRating} stars</h4>
          <h6 className="text-xs">{cuisines.join(" , ")}</h6>
        </div>
      </div>
    </div>
  );
};

export default ResturantCardComponent;
