
const RestaurantCardShimmer = () => {
    return (
        <div className="shimmer-container">
            {[...Array(12)].map((_, index) => (
                <div key={index} className="shimmer-card"></div>
            ))}
        </div>
    );
};

const MenuShimmer = () => {
    return (
        <div className="shimmer-menu">
            <div className="shimmer-restaurant-info"></div>
            <div className="shimmer-menu-items">
                {[...Array(8)].map((_, index) => (
                    <div key={index} className="shimmer-menu-item"></div>
                ))}
            </div>
        </div>
    );
};

const Shimmer = ({ type = "RESTAURANT_LIST" }) => {
    return type === "MENU" ? <MenuShimmer /> : <RestaurantCardShimmer />;
};

export default Shimmer;