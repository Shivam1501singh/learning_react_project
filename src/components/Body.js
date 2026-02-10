import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/Mockdata";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{
  const[list,setrestaurantList]=useState(restaurantList);
  const[searchtext,settext]=useState("");
    return list.length===0?(<Shimmer/>):(
        <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchtext} onChange={(e)=>{
              settext(e.target.value);
            }}></input>
            <button onClick={()=>{
              const filteredlist=list.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
              setrestaurantList(filteredlist);
            }}>search</button>

          </div>
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
                <Link 
                 key={resturant.info.id}
                 to={"/resturants/"+resturant.info.id} 
                >
                  <RestaurantCard  resData={resturant}/>
                </Link>
              ))
            }
        </div>
    </div>
    );
    
    
}

export default Body;