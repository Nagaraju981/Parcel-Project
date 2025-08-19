
import { useContext, useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useonlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header =()=>{
    const [btnVariable, setBtnVariable] =useState("Login")
    const status = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store)=>store.cart.items);
    
    return (
        <div className='flex justify-between bg-pink-100 rounded-xl shadow-xl'>
            <div className='w-26 h-26 px-1 py-1'>
                <img className="rounded-xl" alt='restaurant-logo' src={LOGO_URL}></img>
            </div>
            <div className='flex items-center'>
                <ul className="flex">
                    <li className="px-4 m-4">Status : {status ? '🔴' : '⭕'}</li>
                    <li className="px-4 m-4"><Link to="./">Home</Link></li>
                    <li className="px-4 m-4"><Link to="./About">About</Link></li>
                    <li className="px-4 m-4"><Link to="./Contact">Contact</Link></li>
                    <li className="px-4 m-4">
                        <Link to="./Cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <li className="px-4 m-4">
                        <button onClick={()=>{
                            btnVariable==='Login' ? setBtnVariable(loggedInUser+ " (Logout)") : setBtnVariable("Login")
                        }}>
                            {btnVariable}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;