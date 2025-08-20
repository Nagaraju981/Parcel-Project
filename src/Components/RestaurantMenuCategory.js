import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantMenuCategory = ({data, showItems, setShowIndex}) => {
    const items = data.card?.card?.itemCards
    // const [showItems, setShowItems] = useState(false)
    function handleClick (){
        // setShowItems(!showItems)
        setShowIndex()
    }
    return (
        <div className="p-3">
            <div className="p-3 w-6/12 m-auto bg-gray-100 shadow-xl items-center rounded-2xl font-bold">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <div>{data.card?.card?.title}({data.card?.card?.itemCards.length})</div>
                    <div className="px-3 text-2xl my-auto">{showItems ? "🔽" : "🔼"}</div>
                </div>
                <div>{showItems && <ItemsList items={items}/>}</div>
            </div>
        </div>
    )
};
export default RestaurantMenuCategory;