import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count1 : 1,
            count2 : 2
        }
    }
    
    render(){
        const {area} = this.props
        const {count1, count2} = this.state
        return(
            <div className="userclass-info">
                <h3>Count1 : {count1}</h3>
                <h3>Count2 : {count2}</h3>
                <button onClick={()=>{
                    this.setState({
                        count1 : count1+1,
                        count2 : count2+1
                    })
                }}>Increment</button>
                <h3>Name : {'Nagaraju(Class)'}</h3>
                <h3>Location : Hyderabad</h3>
                <h4>Area : {area}</h4>
                <h3>Email : @nagaraju7</h3>
            </div>
        )
    }
}

export default UserClass;