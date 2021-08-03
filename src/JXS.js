import React from "react"
import images from "./images/bright.jpg"


const user = {
    name: "Adeleke Bright" ,
    avatar :images
}

const ShowUser = props => {
    return (
        <>
            <p> My name is {props.user.name}</p>
            <img src={props.user.avatar}/>
        </>
    )
}

const App = () => {
    return (
        <ShowUser user= {user}/>
    )
}


export default App