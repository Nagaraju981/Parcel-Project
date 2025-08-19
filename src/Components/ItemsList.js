import { useDispatch } from "react-redux"
import { IMG_URL } from "../Utils/constants"
import { addItem } from "../Redux/cartSlice";

const ItemsList = ({items}) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    return (
        <div>
            <div>
                {items.map((item)=>(
                    <div className="p-4 font-normal border-b-1 flex justify-between" key={item.card.info.id}>
                        <div className="w-9/12">
                            <h3 className="font-bold">{item.card.info.name} - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</h3>
                            <span>{item.card.info.description}</span>
                        </div>
                        <div className="w-2/12">
                            <button className="p-2 bg-black text-white w-18 font-bold absolute rounded-2xl mx-3 my-17 cursor-pointer" onClick={() => handleAddItem(item)}>Add +</button>
                            <div><img src={IMG_URL+item.card.info.imageId} className="w-24 h-24 object-cover rounded"></img></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ItemsList