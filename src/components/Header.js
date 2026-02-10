import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    const[btnname,setbtnname]=useState("Login");
    console.log("Header component rendered");
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large" className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li><Link to="/contact">AboutUs</Link></li>
                    <li>ContactUs</li>
                    <li>Cart</li>
                    <button className="login-button" onClick={()=>{btnname==="Login"? setbtnname("Logout"):setbtnname("Login")}}>{btnname}</button>
                </ul>
                
            </div>
        </div>
    )
}

export default Header;