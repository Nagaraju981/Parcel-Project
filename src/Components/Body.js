import RestaurantCard from './RestaurantCard'
// import restaurants from '../Utils/mockData';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useonlineStatus';

const Body = () => {
    let [listofrestaurants, setListofrestaurant] = useState([])
    let [searchBtnSubmit, setSearchBtnSubmit] = useState("")
    let [filteredData, setFilteredData] = useState([])
    const status = useOnlineStatus()
    useEffect(()=>{
        fetchingData();
    },[])
    
    const fetchingData= async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4462183&lng=78.36217839999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();
        setListofrestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }
    if(status === false){
        return <div>Your are in offline. Please check your network...</div>
    }

    return listofrestaurants.length===0 ? <Shimmer /> : (
        <div className='body'>
            <div className='searchbar'>
                <div>
                    <input type='text' className='input-box' value={searchBtnSubmit} onChange={(e)=>{
                        setSearchBtnSubmit(e.target.value)
                    }}></input>
                    <button onClick={()=>{
                        
                        const filteredDataList = listofrestaurants.filter((ress)=>ress.info.name.toLowerCase().includes(searchBtnSubmit.toLowerCase()))
                        setFilteredData(filteredDataList)
                        }}>Submit
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        listofrestaurants = listofrestaurants.filter(
                        (res)=>res.info.avgRating > 4.5
                        );
                        setFilteredData(listofrestaurants)
                        }}>Top rated restaurants
                    </button>
                </div>
                
            </div>
            <div className='restaurant-container'>
                {
                    filteredData.map((e) => (
                        <Link key={e.info.id} to={'/Restaurant/'+e.info.id}><RestaurantCard data={e} /></Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;