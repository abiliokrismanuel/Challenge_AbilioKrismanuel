import React from "react";

export const GreenButton = ({text,kondisi=``}) => {
    return(
        <button className={`${kondisi} h-10 py-2 px-3 text-white bg-green-500 rounded-sm`}><b>{text}</b></button> 
    )
}

export default GreenButton;