import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisine, costForTwo, deliveryTime } = resData?.data;

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-card-img" alt="res-card-img" src={CDN_URL} />
      <h3>{name}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>Rs{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes </h4>
    </div>
  );
};

export default RestaurantCard;
