
import React, { useState, useEffect } from "react";
import WorkshopCard from "../components/WorkshopCard/WorkshopCard";

function Workshops(){
const [ workshopList, setWorkshopList ] = useState([]);

useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}workshops`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        setWorkshopList(data)
    });
    
}, []);

    return (
        <div className="workshops-1">
            <div className="workshops-1b">
                <div className="workshop-1c">
                    <h3>Latest Workshops</h3>
                    <p>Come be a part of our skill sharing community. Sign up to be a mentor today!</p>
                
                
                </div>
            
                <div className="workshops-2">
                
                { workshopList.slice(-3).map((workshopData, key) => {
                return <WorkshopCard key={key} workshopData={workshopData}/>

                })}
                </div>
            </div>
            
        </div>

    )
};

export default Workshops;