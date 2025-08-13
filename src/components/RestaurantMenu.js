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
        <div className="max-w-[900px] mx-auto p-5">
            <div className="mb-[30px] p-5 bg-[#8D6E63] rounded-2xl shadow-[0_4px_12px_rgba(93,64,55,0.2)] text-[#FAF9F6]">
                <h1 className="text-[28px] mb-[10px] text-[#FFD54F]">{name}</h1>
                <p className="text-[#FAF9F6] my-2 text-[16px]">{cuisines?.join(", ")}</p>
                <div className="bg-[#FFD54F] text-[#5D4037] px-2 py-1 rounded inline-block my-2 font-bold">
                    {avgRating} ⭐
                </div>
                <p className="text-[#FAF9F6] my-2 text-[16px]">{areaName}</p>
                <p className="text-[#FAF9F6] my-2 text-[16px]">{costForTwoMessage}</p>
            </div>
            
            <div className="bg-[#FAF9F6] rounded-2xl p-5 shadow-[0_4px_12px_rgba(93,64,55,0.2)]">
                <h2 className="text-[#5D4037] mb-5 text-[24px] border-b-2 border-[#8D6E63] pb-[10px]">Menu</h2>
                {categories?.map((category, index) => (
                    <div key={index} className="mb-[30px] bg-white rounded-[12px] p-[15px] shadow-[0_2px_8px_rgba(93,64,55,0.1)]">
                        <h3 className="text-[#5D4037] pb-[10px] border-b border-[#8D6E63] mb-[15px] text-[20px]">
                            {category?.card?.card?.title}
                        </h3>
                        <ul>
                            {category?.card?.card?.itemCards?.map(item => (
                                <li key={item?.card?.info?.id} className="border-b border-dashed border-[#8D6E63]">
                                    <div className="flex justify-between p-[15px] transition-all duration-300 hover:bg-[#FFF8E1]">
                                        <div className="flex-1">
                                            <h4 className="text-[#5D4037] mb-[5px] text-[16px]">
                                                {item?.card?.info?.name}
                                            </h4>
                                            <div className="text-[#5D4037] font-bold text-[16px] bg-[#FFD54F] px-2 py-1 rounded inline-block mt-2">
                                                ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                                            </div>
                                            <p className="text-[#8D6E63] text-[13px] mt-[5px] leading-[1.5]">
                                                {item?.card?.info?.description}
                                            </p>
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