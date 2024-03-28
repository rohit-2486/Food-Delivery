import React, { useState, useEffect } from "react";
import RestaurantData from '../../restaurantData.json';
import Card from "../Card/Card";
import Shimmer from "../Shimmer/Shimmer";
import "./CardContainer.css";

const CardContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  async function getAllRestaurantData() {
    // const data = await fetch(RESTAURANT_LIST_URL);
    // const json = await data.json();
    // setRestaurantData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredRestaurantData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurantData(RestaurantData);
    setFilteredRestaurantData(RestaurantData);
    console.log(RestaurantData);
  }
  function filterSearchData(searchText, restaurantData) {
    const data = restaurantData.filter((val) =>
      val?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    setSearchText("");
    return data;
  }
  function filterButtonData(booleanValue, restaurantData) {
    console.log(restaurantData);
    const data = restaurantData.filter(
      (val) => val?.info?.veg === booleanValue
    );
    return data;
  }

  useEffect(() => {
    getAllRestaurantData();
  }, []);

  return restaurantData?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filterDiv">
        <div className="searchDiv">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Restaurant"
          />
          <button
            onClick={() => {
              const data = filterSearchData(searchText, restaurantData);
              setFilteredRestaurantData(data);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <div className="filterButtonDiv">
          <button
            className="vegButton"
            onClick={() => {
              const data = filterButtonData(true, restaurantData);
              setFilteredRestaurantData(data);
            }}
          >
            Veg
          </button>
          <button
            className="nonvegButton"
            onClick={() => {
              const data = filterButtonData(false, restaurantData);
              setFilteredRestaurantData(data);
            }}
          >
            Non-Veg
          </button>
        </div>
      </div>
      <div className="cardContainer">
        {filteredRestaurantData?.map((value) => (
            <Card key={value.info.id} {...value.info} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
