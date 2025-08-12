import { useEffect, useState } from "react";
import { RES_URL } from "./constants";

const useRestaurantInfo = (resId) =>{
    const [resInfo, setResInfo] = useState(null)
    useEffect(()=>{
        fetchingData()
    })
    const fetchingData = async() => {
        const data = await fetch(RES_URL+resId)
        const json = await data.json()
        setResInfo(json.data)
    }
    return resInfo;
}
export default useRestaurantInfo;