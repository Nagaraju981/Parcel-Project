import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_URL } from "../Utils/constants";


const RestaurantInfo = () =>{
    const [resInfo, setResInfo] = useState(null)
    useEffect(()=>{
        fetchingData()
    },[])
    const {resId} = useParams()
    const fetchingData = async()=>{
        const data = await fetch(RES_URL+resId)
        const json = await data.json()
        setResInfo(json.data)
    }
    const { name, avgRating, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info || {};
    // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[1] || {};
    // console.log(itemCards)
    return (
        <div>
            <h1>{name}</h1>
            <h4>Rating : {avgRating}</h4>
            <h4>{(cuisines || []).join(",")}</h4>
            <h4>{costForTwoMessage}</h4>
            <h3>Menu</h3>
            {/* <ul>
                {Array.isArray(itemCards) && itemCards.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                ))}
            </ul> */}
        </div>
    )
}
export default RestaurantInfo;