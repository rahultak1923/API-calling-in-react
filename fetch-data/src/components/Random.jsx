import React from "react";

const RandomCard=(props)=>{
    console.log(props.userData)
    return(
        <div>{props.userData.name.first}</div>
    )
}
export default RandomCard; 