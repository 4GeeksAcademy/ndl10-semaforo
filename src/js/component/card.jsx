import React, { useState } from "react";

const Card = () => {
    const [ color, setColor] = useState("red");




    return (
        <div className="trafficlight container">

            <div className={"red light" + (color === "purple" ? "active" : "")} onClick={() => setColor("active")}>
                
            </div>
            <div className={"yellow light" + (color === "purple" ? "active" : "")} onClick={() => setColor("active")}>
                
            </div>
            <div className={"green light" + (color === "purple" ? "active" : "")} onClick={() => setColor("active")}>
                
            </div>
            <div className={"purple light" + (color === "purple" ? "active" : "") } onClick={() => setColor("active")}>
                
            </div>


        </div>
    );
}

export default Card;