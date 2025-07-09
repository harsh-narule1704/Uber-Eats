
 import React from "react";
 import ReactDOM from "react-dom/client";


 const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="/ubereats.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
 }

 const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, 
            name, 
            cuisines, 
            avgRating, 
            costForTwo, 
            deliveryTime
        } = resData?.data;
    return (
        <div className="res-card" >
            <img alt="res-logo" className="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.data.cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}⭐</h4>
            <h4>₹{costForTwo / 100} For Two</h4>
            <h4>{deliveryTime} Mins</h4>
            
        </div>
    )
 }

 // RestaurantList is JSON Data for displaying cards
const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "74453",
      name: "Domino's Pizza",
      cloudinaryImageId: "bz9zkh2aqywjhpankb07",
      cuisines: ["Pizzas"],
      costForTwo: 40000,
      deliveryTime: 45,
      avgRating: "4.0",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "410476",
      name: "The Brooklyn Creamery - Healthy Ice Cream",
      cloudinaryImageId: "ldtibwymvzehvmdwl8la",
      cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
      costForTwo: 20000,
      deliveryTime: 31,
      avgRating: "4.4",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "81094",
      name: "Richie Rich Juices & Shakes",
      cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
      cuisines: ["Ice Cream"],
      costForTwo: 25000,
      deliveryTime: 30,
      avgRating: "3.9",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "311443",
      name: "Siddhi Icecream & Thick Shake",
      cloudinaryImageId: "spd3y5gok3vvwqulgmda",
      cuisines: ["Ice Cream", "Juices", "Desserts", "Beverages"],
      costForTwo: 20000,
      deliveryTime: 30,
      avgRating: "4.5",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "307070",
      name: "Pizza Pie",
      cloudinaryImageId: "bvr70adr30ejyr5ua79k",
      cuisines: ["Pizzas"],
      costForTwo: 30000,
      deliveryTime: 37,
      avgRating: "4.2",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "76858",
      name: "Feeling Hungry",
      cloudinaryImageId: "oxsb5mr1xsmhnxhunjsc",
      cuisines: ["Chinese", "North Indian", "Biryani"],
      costForTwo: 2000,
      deliveryTime: 35,
      avgRating: "3.2",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "617279",
      name: "Malaxmi Fast Food",
      cloudinaryImageId: "agkm7cflq72tkualhstb",
      cuisines: ["Fast Food", "Pizzas", "Snacks", "Beverages"],
      costForTwo: 20000,
      deliveryTime: 44,
      avgRating: "4.0",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "469264",
      name: "Dessert House",
      cloudinaryImageId: "jegpumsjcmomksbr2sxr",
      cuisines: ["Desserts", "Ice Cream"],
      costForTwo: 15000,
      deliveryTime: 27,
      avgRating: "4.5",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "395204",
      name: "McDonald's Gourmet Burger Collection",
      cloudinaryImageId: "wzbo5xivr8hstl0vxzcm",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      costForTwo: 50000,
      deliveryTime: 31,
      avgRating: "4.2",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "193541",
      name: "Behrouz Biryani",
      cloudinaryImageId: "craozjakzx7sll2uracb",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "North Indian",
        "Persian",
        "Desserts",
      ],
      costForTwo: 50000,
      deliveryTime: 49,
      avgRating: "4.3",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "475510",
      name: "Momos House",
      cloudinaryImageId: "vmold2zualdrrypxcvue",
      cuisines: ["Fast Food"],
      costForTwo: 20000,
      deliveryTime: 31,
      avgRating: "4.1",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "127596",
      name: "Sabir Chicken",
      cloudinaryImageId: "kilrdjqt8chduasii5ni",
      cuisines: ["North Indian", "Biryani"],
      costForTwo: 30000,
      deliveryTime: 30,
      avgRating: "4.1",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "64656",
      name: "Mahesh Pav Bhaji",
      cloudinaryImageId: "84d3bea985f13bd980dc39c9c73bc87f",
      cuisines: ["Desserts", "Chinese", "South Indian", "Ice Cream", "Pizzas"],
      costForTwo: 25000,
      deliveryTime: 36,
      avgRating: "4.1",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "255204",
      name: "The Dango Cake Shop",
      cloudinaryImageId: "mnvfpsoealkflze4e5qi",
      cuisines: ["Bakery"],
      costForTwo: 27000,
      deliveryTime: 34,
      avgRating: "4.2",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "664656",
      name: "Cheezylicious Cafe",
      cloudinaryImageId: "fda9ad56b9d62070fec105cd93693129",
      cuisines: [
        "Cafe",
        "Fast Food",
        "Chinese",
        "Snacks",
        "Italian",
        "Mexican",
      ],
      costForTwo: 15000,
      deliveryTime: 38,
      avgRating: "3.9",
    },
    subtype: "basic",
  },
];

 const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))}
                
            </div>
        </div>
    )
 }
 const AppLayout = () => {
    return (
        <div className="app">
            {/*Header*/}
            <Header />
            {/* Body*/}
            <Body/>
        </div>
    )
 }

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<AppLayout/>);