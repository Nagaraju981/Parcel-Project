import { IMG_URL } from "../Utils/constants";

const RestaurantCard =(props)=>{
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = props.data.info
    
    return (
        <div className='restaurant-card'>
            <img src={IMG_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Ratings</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard;