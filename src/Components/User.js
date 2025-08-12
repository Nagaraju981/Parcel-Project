import { useState } from "react";

const User = ({area}) =>{
    const [count, setCount] = useState(0);
    return (
        <div className="user-info">
            <h3>Count : {count}</h3>
            <button onClick={()=>{
                setCount(count+1)
            }}>Increment</button>
            <h3>Name : {'Nagaraju(Function)'}</h3>
            <h3>Location : Hyderabad</h3>
            <h4>Area : {area}</h4>
            <h3>Email : @nagaraju7</h3>
        </div>
    )
}

export default User;