
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {

    //Local state variable
    const [listOfRestaurants, setrestaurantList] = useState(restaurantList);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Try using a different CORS proxy
            const data = await fetch(
                "https://api.allorigins.win/get?url=" +
                encodeURIComponent(
                    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8530093&lng=74.56234789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                )
            );

            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }

            const response = await data.json();
            
            // allorigins wraps the response in a "contents" property
            const json = JSON.parse(response.contents);
            console.log("API Response:", json);

            // Find the restaurant data dynamically
            const restaurantCard = json?.data?.cards?.find(
                card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );

            if (restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                setrestaurantList(restaurantCard.card.card.gridElements.infoWithStyle.restaurants);
            } else {
                console.error("Could not find restaurant data in the API response");
                // Fallback to mock data if available
                setrestaurantList(restaurantList);
            }
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
            // Fallback to mock data if available
            setrestaurantList(restaurantList);
        }
    };

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
                {listOfRestaurants.filter((res) => res?.info?.id).map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
                
            </div>
        </div>
    );
 };


 export default Body;