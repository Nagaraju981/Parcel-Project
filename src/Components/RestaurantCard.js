import { IMG_URL } from "../Utils/constants";

const RestaurantCard =(props)=>{
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = props.data.info
    
    return (
        <div className='restaurant-card w-[200px] m-2 bg-amber-100 rounded-xl h-[350px] shadow-lg hover:p-2'>
            <img className="p-2 w-[200px] h-[130px] rounded-xl" src={IMG_URL+cloudinaryImageId}></img>
            <h3 className="p-2 font-bold">{name}</h3>
            <h4 className="px-2 wrap-break-word">{cuisines.join(",")}</h4>
            <h4 className="px-2">{avgRating} Ratings</h4>
            <h4 className="px-2">{sla.deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard;