import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, [resId]);

    const fetchData = async () => {
        try{
            const data = await fetch(
                "https://api.allorigins.win/get?url=" +
                encodeURIComponent(
                    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.8530093&lng=74.56234789999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
                )
            );

            const response = await data.json();
            const json = JSON.parse(response.contents);
            setResInfo(json.data);
        }
        catch (error) {
            console.error("Error while fetching restaurant menu", error);
        }
    };

    return resInfo;
}

export default useRestaurantMenu;