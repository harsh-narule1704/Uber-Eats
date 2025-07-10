
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    //Local state variable
    const [listOfRestaurants, setrestaurantList] = useState(restaurantList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={() =>{
                    setrestaurantList()
                    const filteredList = listOfRestaurants.filter(
                        (restaurant) => restaurant.data.avgRating > 4.1
                    );
                    setrestaurantList(filteredList);
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))}
                
            </div>
        </div>
    );
 };


 export default Body;