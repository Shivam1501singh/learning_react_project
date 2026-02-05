import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/Mockdata";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
  const[list,setrestaurantList]=useState(restaurantList);
    return list.length===0?(<Shimmer/>):(
        <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
            let filteredRestaurant=list.filter((res)=>res.info.avgRating>4.3);
            setrestaurantList(filteredRestaurant);
            console.log(filteredRestaurant);
          }}
          >Top rated resturants</button>

        </div>
        <div className="res-container">
            {
              list.map((resturant)=>(
                <RestaurantCard key={resturant.info.id} resData={resturant}/>
              ))
            }
        </div>
    </div>
    );
    
    
}

export default Body;