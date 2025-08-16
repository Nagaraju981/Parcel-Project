
import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useonlineStatus";

const Header =()=>{
    const [btnVariable, setBtnVariable] =useState("Login")
    const status = useOnlineStatus();
    
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
                        Cart
                        {/* <img src='https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA='></img> */}
                    </li>
                    <li className="px-4 m-4">
                        <button onClick={()=>{
                            btnVariable==='Login' ? setBtnVariable("Logout") : setBtnVariable("Login")
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