import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import { useState } from "react";


const RestaurantMenu = () => {
    const { resId } = useParams();
    
    //Custom hook to fetch restaurant menu
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer type="MENU" />;

    console.log("Restaurant Info Structure:", resInfo?.cards);

    const restaurantInfo = resInfo?.cards?.find(card => card?.card?.card?.info)?.card?.card?.info;
    const { name, cuisines, costForTwoMessage, areaName, avgRating } = restaurantInfo || {};
    
    // Find the menu items card
    const menuItemsCard = resInfo?.cards?.find(card => 
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            item => item?.card?.card?.itemCards || item?.card?.card?.categories
        )
    );

    const categories = menuItemsCard?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        card => card?.card?.card?.itemCards || card?.card?.card?.categories
    );

    return (
        <div className="menu">
            <div className="restaurant-info">
                <h1>{name}</h1>
                <p>{cuisines?.join(", ")}</p>
                <div className="rating">{avgRating} ⭐</div>
                <p>{areaName}</p>
                <p>{costForTwoMessage}</p>
            </div>
            
            <div className="menu-items">
                <h2>Menu</h2>
                {categories?.map((category, index) => (
                    <div key={index} className="category">
                        <h3>{category?.card?.card?.title}</h3>
                        <ul>
                            {category?.card?.card?.itemCards?.map(item => (
                                <li key={item?.card?.info?.id}>
                                    <div className="menu-item">
                                        <div className="item-details">
                                            <h4>{item?.card?.info?.name}</h4>
                                            <div className="item-price">
                                                ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                                            </div>
                                            <p className="item-description">{item?.card?.info?.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;