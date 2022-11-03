import React from "react";
import { Fetcher } from "react-router-dom";
export default function MemeForm()
{
    function getData(){
        const length=100
        const randomNumber = Math.floor(Math.random() * length)
        console.log(randomNumber)
    }
    return(
        <div className="form">
            <input placeholder="Guess Image"></input>
            <button>Confirm Guess</button>
            <button onClick={getData}>Get new Image</button>
        </div>
    )
}