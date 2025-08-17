import RestaurantCard from './RestaurantCard'
// import restaurants from '../Utils/mockData';
import { useContext, useEffect, useState } from 'react';
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useonlineStatus';
import UserContext from '../Utils/UserContext';

const Body = () => {
    let [listofrestaurants, setListofrestaurant] = useState([])
    let [searchBtnSubmit, setSearchBtnSubmit] = useState("")
    let [filteredData, setFilteredData] = useState([])
    const status = useOnlineStatus()
    useEffect(()=>{
        fetchingData();
    },[])
    const { setUserInfo, loggedInUser } = useContext(UserContext)
    
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
            <div className='searchbar flex p-2 m-2'>
                <div>
                    <input type='text' className='input-box px-2 border-1 rounded-md' value={searchBtnSubmit} onChange={(e)=>{
                        setSearchBtnSubmit(e.target.value)
                    }}></input>
                    <button className='bg-gray-300 rounded-sm px-4' onClick={()=>{
                        
                        const filteredDataList = listofrestaurants.filter((ress)=>ress.info.name.toLowerCase().includes(searchBtnSubmit.toLowerCase()))
                        setFilteredData(filteredDataList)
                        }}>Submit
                    </button>
                </div>
                <div className='px-4'>
                    <button className="bg-gray-300 rounded-sm px-4" onClick={() => {
                        listofrestaurants = listofrestaurants.filter(
                        (res)=>res.info.avgRating > 4.5
                        );
                        setFilteredData(listofrestaurants)
                        }}>Top rated restaurants
                    </button>
                </div>
                <div>
                    <label>Username : </label>
                    <input className='border border-black' value={loggedInUser} onChange={(e)=>setUserInfo(e.target.value)}/>
                </div>
                
            </div>
            <div className='restaurant-container flex flex-wrap'>
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