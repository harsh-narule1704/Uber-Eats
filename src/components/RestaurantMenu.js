import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import { useState } from "react";


const RestaurantMenu = () => {
    const { resId } = useParams();
    const [expandedIndex, setExpandedIndex] = useState(null);
    
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
                    <div key={index} className="mb-[15px] bg-[#8D6E63] rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                        <button 
                            className="w-full p-[15px] flex items-center justify-between text-left hover:bg-[#7C5D53] transition-all duration-300 rounded-t-[12px]"
                            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        >
                            <h3 className="text-[#FFD54F] text-[20px] font-semibold flex items-center gap-2">
                                {category?.card?.card?.title}
                                <span className="text-[#FAF9F6] text-[14px]">
                                    ({category?.card?.card?.itemCards?.length || 0} items)
                                </span>
                            </h3>
                            <span className={`transform transition-transform duration-300 text-[25px] text-[#FFD54F] font-extrabold tracking-tighter ${expandedIndex === index ? 'rotate-90' : ''}`}>
                                ❯
                            </span>
                        </button>
                        
                        <div className={`transition-all duration-300 overflow-hidden ${expandedIndex === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <ul className="p-[15px] border-t border-[#FAF9F6] border-opacity-20 overflow-y-auto max-h-[400px] 
                                scrollbar-thin scrollbar-thumb-[#FFD54F] scrollbar-track-[#5D4037]
                                hover:scrollbar-thumb-[#FFC107]
                                [&::-webkit-scrollbar]:w-2
                                [&::-webkit-scrollbar-track]:rounded-full
                                [&::-webkit-scrollbar-thumb]:rounded-full
                                [&::-webkit-scrollbar-track]:bg-[#5D4037]
                                [&::-webkit-scrollbar-thumb]:bg-[#FFD54F]
                                [&::-webkit-scrollbar-thumb:hover]:bg-[#FFC107]">
                                {category?.card?.card?.itemCards?.map(item => (
                                    <li key={item?.card?.info?.id} className="border-b border-dashed border-[#FAF9F6] border-opacity-20 last:border-none">
                                        <div className="flex justify-between p-[15px] gap-4 transition-all duration-300 hover:bg-[#7C5D53] rounded-[8px]">
                                            <div className="flex-1">
                                                <h4 className="text-[#FAF9F6] mb-[5px] text-[16px] font-medium">
                                                    {item?.card?.info?.name}
                                                </h4>
                                                <div className="text-[#5D4037] font-bold text-[16px] bg-[#FFD54F] px-2 py-1 rounded inline-block mt-2">
                                                    ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                                                </div>
                                                <p className="text-[#FAF9F6] text-[13px] mt-[5px] leading-[1.5] opacity-90">
                                                    {item?.card?.info?.description}
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0 flex items-center">
                                                <button className="px-4 py-2 bg-[#FFD54F] text-[#5D4037] font-bold rounded-lg hover:bg-[#FFC107] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1">
                                                    ADD <span className="text-lg">+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;