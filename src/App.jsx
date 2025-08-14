import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../styles.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {
    return (
        <div className="app min-h-screen w-full bg-[#F5EDE6] font-pacifico">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}> 
                        <Grocery/> 
                    </Suspense>
                ) 
            },
            // {
            //     path: "cart",
            //     element: <Cart />  // You can replace this with your Cart component when ready
            // },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ]
    }
 ]);

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={appRouter} />);