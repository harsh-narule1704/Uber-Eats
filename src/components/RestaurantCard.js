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
        <Link to={`/restaurants/${id}`} className="restaurant-link">
            <div className="res-card">
                <img
                    alt="res-logo"
                    className="res-logo"
                    src={CDN_URL + cloudinaryImageId}
                />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}⭐</h4>
                <h4>{costForTwo} </h4>
                <h4>{sla.slaString}</h4>
            </div>
        </Link>
    );
};

export default RestaurantCard;
