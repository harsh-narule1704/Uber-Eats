import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between text-[#5D4037] border border-[#8D6E63] rounded-2xl">
            <div>
                <Link to="/">
                    <img className="m-[10px] w-[200px]" src={LOGO_URL} alt="logo" />
                </Link>
            </div>
            <div className="px-5">
                <ul className="flex text-2xl list-none items-center">
                    <li className="p-[10px] m-[10px]">
                        Online Status: {onlineStatus ? "✅" : "🛑"}
                    </li>
                    <li className="p-[10px] m-[10px]">
                        <Link to="/" className="no-underline text-[#5D4037] transition-colors duration-300 hover:text-[#FFD54F]">
                            Home
                        </Link>
                    </li>
                    <li className="p-[10px] m-[10px]">
                        <Link to="/about" className="no-underline text-[#5D4037] transition-colors duration-300 hover:text-[#FFD54F]">
                            About
                        </Link>
                    </li>
                    <li className="p-[10px] m-[10px]">
                        <Link to="/contact" className="no-underline text-[#5D4037] transition-colors duration-300 hover:text-[#FFD54F]">
                            Contact Us
                        </Link>
                    </li>
                    <li className="p-[10px] m-[10px]">
                        <Link to="/grocery" className="no-underline text-[#5D4037] transition-colors duration-300 hover:text-[#FFD54F]">
                            Grocery
                        </Link>
                    </li>
                    <li className="p-2.5 m-2.5">
                        <Link to="/cart" className="no-underline text-brown-dark hover:text-secondary transition-colors duration-300">
                            Cart
                        </Link>
                    </li>
                    <button 
                        className="px-5 py-2 bg-secondary text-text-dark border border-text-dark rounded-2xl text-lg font-bold bg-[#FFD54F] transition-all duration-300 shadow-card  ml-2.5"
                        onClick={() => {
                            btnNameReact === "Login" ? 
                            setBtnNameReact("Logout") : 
                            setBtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
 }

 export default Header;