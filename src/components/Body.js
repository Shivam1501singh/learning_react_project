import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/Mockdata";

const Body=()=>{
    return(
        <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {
              restaurantList.map((resturant)=>(
                <RestaurantCard key={resturant.info.id} resData={resturant}/>

              ))
            }
        </div>
    </div>
    );
    
    
}

export default Body;