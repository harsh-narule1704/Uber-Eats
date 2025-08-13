import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
        id
    } = resData?.info;

    return (
        <div className="bg-[#8D6E63] text-[#FAF9F6] w-[220px] h-[550px] p-[15px] m-[5px] rounded-[15px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex flex-col hover:border hover:border-[#FFD54F] cursor-pointer">
            <Link to={`/restaurants/${id}`} className="no-underline text-inherit">
                <img
                    alt="res-logo"
                    className="w-full rounded-[12px] object-cover mb-2"
                    src={CDN_URL + cloudinaryImageId}
                />
                <h3 className="m-0 text-[25px] text-[#FFD54F] mb-1">{name}</h3>
                <h4 className="m-0 text-[18px] text-[#FAF9F6] opacity-90 whitespace-nowrap overflow-hidden text-ellipsis mb-1">{cuisines.join(", ")}</h4>
                <h4 className="m-0 text-[18px] text-[#FAF9F6] opacity-90 mb-1">{avgRating}⭐</h4>
                <h4 className="m-0 text-[18px] text-[#FAF9F6] opacity-90 mb-1">{costForTwo}</h4>
                <h4 className="m-0 text-[18px] text-[#FAF9F6] opacity-90">{sla.slaString}</h4>
            </Link>
        </div>
    );
        
};

export default RestaurantCard;
