import { useParams } from "react-router-dom";
import restaurantList from "../utils/Mockdata";

const Resturantmenu = () => {
  const { resId } = useParams();
  const restaurant = restaurantList.find(
    (res) => res.info.id === resId
  );

  return (
    <div className="menu">
      <h1>{restaurant.info.name}</h1>
      <h2>Menu</h2>
      <ul>
        {restaurant.info.cuisines.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resturantmenu;
