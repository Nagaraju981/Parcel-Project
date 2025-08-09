
import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";

const Header =()=>{
    const [btnVariable, setBtnVariable] =useState("Login")
    
    return (
        <div className='header'>
            <div className='restaurant-logo'>
                <img alt='restaurant-logo' src={LOGO_URL}></img>
            </div>
            <div className='nav-links'>
                <ul>
                    <li><Link to="./">Home</Link></li>
                    <li><Link to="./About">About</Link></li>
                    <li><Link to="./Contact">Contact</Link></li>
                    <li>
                        Cart
                        {/* <img src='https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA='></img> */}
                    </li>
                    <li>
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