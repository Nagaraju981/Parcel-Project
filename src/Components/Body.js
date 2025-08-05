import RestaurantCard from './RestaurantCard'
import restaurants from '../Utils/mockData';

const Body =()=>{
    const listofrestaurants = {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "17100",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/ddcf366c-143d-418c-8227-511fe1a46d7b_17100.JPG",
            "cuisines": [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps"
            ],
            "avgRating": 4.1,
            "sla": {
                "deliveryTime": 24
            }
        }
    }
    return (
        <div className='body'>
            <div className='searchbar'>
                <button onClick={()=>{
                    console.log("Button clicked")
                }}>Filtered Data</button>
                <div className='search-submit'><button>Submit</button></div>
            </div>
            <div className='restaurant-container'>
                {
                    restaurants.map((e)=>(
                        <RestaurantCard key={e.info.id} data={e}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;