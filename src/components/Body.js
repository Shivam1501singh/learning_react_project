import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/Mockdata";

const Body=()=>{
    return(
        <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
            filteredRestaurant=restaurantList.filter((res)=>res.info.avgRating>4.3);
            console.log(filteredRestaurant);
          }}
          >Top rated resturants</button>

        </div>
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