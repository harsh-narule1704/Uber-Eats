
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {

    //Local state variable
    const [listOfRestaurants, setrestaurantList] = useState(restaurantList);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText,setSearchText] = useState(""); 
    
    //whenever state variables update, react triggers a reconciliation cycle(re-renders the component).
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
                setFilteredRestaurant(restaurantCard.card.card.gridElements.infoWithStyle.restaurants);
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


    return listOfRestaurants.length === 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            // Filter restaurants on every keystroke
                            const searchValue = e.target.value.toLowerCase();
                            const filtered = listOfRestaurants.filter((res) => 
                                res?.info?.name?.toLowerCase().includes(searchValue) ||
                                res?.info?.cuisines?.join(" ").toLowerCase().includes(searchValue)
                            );
                            setFilteredRestaurant(filtered);
                        }}
                    />
                    <button onClick={() => {
                        const filtered = listOfRestaurants.filter((res) => 
                            res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
                            res?.info?.cuisines?.join(" ").toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filtered);
                    }}>Search</button>
                </div>
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const filtered = listOfRestaurants.filter((res) => res?.info?.avgRating > 4.5);
                        setFilteredRestaurant(filtered);
                    }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <Link 
                        key={restaurant?.info?.id} 
                        to={`/restaurant/${restaurant?.info?.id}`}
                        className="restaurant-link"
                    >
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
 };


 export default Body;