import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import workshopPhoto from  "../assets/workshop1.jpg";





function WorkshopDetail(){
    const [workshopData, setWorkshopData] = useState ({ mentors: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}workshops/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setWorkshopData(data)
        })
    }, []);
    console.log(workshopData);



    return (
        <div>
            <div className="workshop-block">
            <div className="block1">
            <img src={ workshopPhoto } alt="workshop-graphic" />
            </div>
            <div className="block2">
                <div>

                    <div><h4>{workshopData.title}</h4></div>
                    <div><h6>{workshopData.description}</h6></div>
                    <div></div>
                    
                   
                    
                </div>
                
            </div>

            </div>
            
            
            
        </div>
        

    )
};

export default WorkshopDetail;