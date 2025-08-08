
import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";

const Header =()=>{
    const [btnVariable, setBtnVariable] =useState("Login")
    
    return (
        <div className='header'>
            <div className='restaurant-logo'>
                <img alt='restaurant-logo' src={LOGO_URL}></img>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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