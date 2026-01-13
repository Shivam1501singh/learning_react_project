import React from "react";
import ReactDOM from "react-dom/client";


const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large" className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>ContactUs</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard=()=>{
    return(
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/8/6/4e38f0a0-ea9b-480c-9a55-fa47a9b0468b_a100f7e6-9113-499d-a2e0-23681213c1df.JPG"></img>
            <h3>MeghanaFoods</h3>
            <h4>north indian,chinese</h4>
            <h4>4.4⭐</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    </div>
    );
    
    
}

const Applayout=()=>{
    return(
        <div className="App">
            <Header/>
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />)
