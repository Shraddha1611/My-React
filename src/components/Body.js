import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function Body() {
  // state Variable:

  const [listOfRestaurants, setlistOfRestaurants] = useState([
    {
      data: {
        id: "334475",
        name: "KFC",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "3.8",
      },
    },
    {
      data: {
        id: "334476",
        name: "Dominos",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "4.5",
      },
    },
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filterList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurants(filterList);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
}

export default Body;
