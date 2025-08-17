import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_URL } from "../Utils/constants";
import useRestaurantInfo from "../Utils/useRestaurantInfo";
import RestaurantMenuCategory from "./RestaurantMenuCategory";


const RestaurantInfo = () =>{
    const [showIndex, setShowIndex] = useState(null)
    const {resId} = useParams()
    const resInfo = useRestaurantInfo(resId)
    const { name, avgRating, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info || {};
    const categories = (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []).filter((c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return (
        <div >
            <div className="text-center p-4">
                <h1 className="p-4 font-bold text-2xl">{name}</h1>
                <h4 className="p-2 font-bold text-md">{(cuisines || []).join(",")}</h4>
                <h4 className="p-2 font-bold text-md">{costForTwoMessage} - Rating : {avgRating}</h4>
                <h3 className="p-4 font-bold text-xl">Menu</h3>
            </div>
            <div>
                {(categories).map((category, index)=>(
                    <RestaurantMenuCategory data={category} key={category.card.card.categoryId} showItems={index === showIndex} setShowIndex={()=>setShowIndex(prev => (prev === index ? null : index))}/>
                ))}
            </div>
            
            
        </div>
    )
}
export default RestaurantInfo;