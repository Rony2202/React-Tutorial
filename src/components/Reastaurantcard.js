import { CDN_URL } from "../../utilities/constant";

const Reastaurantcard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.avgRatingString} star</h4>
      <h4>{resData.info.slaString}</h4>
      <h4>{resData.info.costForTwo}</h4>
    </div>
  );
};

export default Reastaurantcard;
