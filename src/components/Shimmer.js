const RestaurantCardShimmer = () => {
    return (
        <div className="flex flex-wrap gap-4 p-5 justify-center">
            {[...Array(12)].map((_, index) => (
                <div 
                    key={index} 
                    className="w-[220px] h-[350px] bg-gray-100 rounded-2xl overflow-hidden relative shadow-card before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[shimmer_2s_infinite]"
                />
            ))}
        </div>
    );
};

const MenuShimmer = () => {
    return (
        <div className="max-w-[900px] mx-auto p-5">
            <div className="h-[150px] bg-primary rounded-2xl mb-8 relative overflow-hidden shadow-card before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-secondary/20 before:to-transparent before:animate-[shimmer_2s_infinite]" />
            <div className="bg-text-light rounded-2xl p-5 shadow-card">
                {[...Array(8)].map((_, index) => (
                    <div 
                        key={index} 
                        className="h-[100px] bg-gray-100 my-4 rounded-xl relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent before:animate-[shimmer_2s_infinite]"
                    />
                ))}
            </div>
        </div>
    );
};

const Shimmer = ({ type = "RESTAURANT_LIST" }) => {
    return type === "MENU" ? <MenuShimmer /> : <RestaurantCardShimmer />;
};

export default Shimmer;
