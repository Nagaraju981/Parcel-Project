import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../Utils/UserContext";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <User area = {'Gachibowli (Function)'}/>
            <UserClass area = {'Gachibowli (Class)'}/>
        </div>
    )
};
export default About;

