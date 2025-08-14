import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
    //Local state variable
    const [listOfRestaurants, setrestaurantList] = useState(restaurantList);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState(""); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
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
            const json = JSON.parse(response.contents);

            const restaurantCard = json?.data?.cards?.find(
                card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );

            if (restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                setrestaurantList(restaurantCard.card.card.gridElements.infoWithStyle.restaurants);
                setFilteredRestaurant(restaurantCard.card.card.gridElements.infoWithStyle.restaurants);
            } else {
                console.error("Could not find restaurant data in the API response");
                setrestaurantList(restaurantList);
            }
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
            setrestaurantList(restaurantList);
        }
    };

    return listOfRestaurants.length === 0 ? (<Shimmer/>) : (
        <div className="bg-[#FAF9F6] text-[#2E2E2E]">
            <div className="flex items-center justify-between p-[20px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[20px]">
                <div className="flex items-center gap-[10px] flex-1">
                    <div className="flex items-center gap-[10px] flex-1 max-w-[600px]">
                        <input 
                            type="text" 
                            className="flex-1 p-[12px_20px] border border-[#8D6E63] rounded-[6px] text-[14px] outline-none bg-white text-[#5D4037] transition-all duration-300 focus:border-[#5D4037] focus:shadow-[0_0_0_2px_rgba(93,64,55,0.1)]"
                            placeholder="Search Restaurants..."
                            value={searchText} 
                            onChange={(e) => {
                                setSearchText(e.target.value);
                                const searchValue = e.target.value.toLowerCase();
                                const filtered = listOfRestaurants.filter((res) => 
                                    res?.info?.name?.toLowerCase().includes(searchValue) ||
                                    res?.info?.cuisines?.join(" ").toLowerCase().includes(searchValue)
                                );
                                setFilteredRestaurant(filtered);
                            }}
                        />
                        <button 
                            className="p-[12px_20px] bg-[#FFD54F] text-[#2E2E2E]  border border-[#2E2E2E] rounded-[16px] cursor-pointer text-lg  font-bold  transition-all duration-300 shadow-[0_4px_12px_rgba(93,64,55,0.2)] hover:bg-[#FFC107] hover:shadow-[0_6px_16px_rgba(93,64,55,0.3)]"
                            onClick={() => {
                                const filtered = listOfRestaurants.filter((res) => 
                                    res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
                                    res?.info?.cuisines?.join(" ").toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredRestaurant(filtered);
                            }}
                        >
                            Search
                        </button>
                    </div>
                    <button 
                        className="filter-btn p-[10px] m-[10px] h-[50px] w-[250px] text-lg font-bold text-[#2E2E2E] rounded-[16px] border border-[#2E2E2E] bg-[#FFD54F] shadow-[0_4px_12px_rgba(93,64,55,0.2)] hover:bg-[#FFC107]  cursor-pointer"
                        onClick={() => {
                            const filtered = listOfRestaurants.filter((res) => res?.info?.avgRating > 4.5);
                            setFilteredRestaurant(filtered);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-6 p-8 justify-center bg-[#F5EDE6]">
                {filteredRestaurant.map((restaurant) => (
                    <div key={restaurant?.info?.id} className="transform transition-transform duration-200 hover:scale-105">
                        <RestaurantCard 
                            resData={restaurant}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;
