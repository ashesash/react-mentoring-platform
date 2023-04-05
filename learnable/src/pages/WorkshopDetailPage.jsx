import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import workshopPhoto from  "../assets/workshop1.jpg";

function WorkshopDetail(){
    const [workshopData, setWorkshopData] = useState ({ mentors: [] });
    const { id } = useParams();

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        fetch(`${import.meta.env.VITE_API_URL}workshops/${id}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${token}`,
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setWorkshopData(data)
        })
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();

            postData().then((response) => {
                alert(response.result)
            });

    };

    const postData = async () => {
        const token = window.localStorage.getItem("token");
        const response = await fetch(`${import.meta.env.VITE_API_URL}workshops/${id}/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${token}`,
            },
            body: JSON.stringify(workshopData) 

        });
        return response.json();
        };

    return(
        <div className="detail">
            <img className="detail_image" src={workshopData.image}/>
            <div className="detail_body">
            <h3 className="card_title">{workshopData.title}</h3>
            <p><i>{workshopData.description}</i></p>
            <p><b>Date: </b>{new Date(workshopData.workshop_date).toString()}</p>
            <p><b>Positions remaining: </b>{workshopData.max_mentor_num - workshopData.mentor_count}</p>
            <p><b>Status: </b>{workshopData.is_open ? 'open' : 'closed'}</p>
            <button type="submit" className="signup_button" onClick={handleSubmit}>Sign up as a mentor</button>
            </div>
        </div>
    );

    // return (
    //     <div>
    //         <div className="workshop-block">
    //         <div className="block1">
    //         <img src={ workshopData.image } alt="workshop-graphic" />
    //         </div>
    //         <div className="block2">
    //             <div>

    //                 <div><h4>{workshopData.title}</h4></div>  
    //                 <div><h6>{workshopData.description}</h6></div>
    //                 <div><h6>{workshopData.workshop_date}</h6></div>
    //                 <div><h6>{workshopData.mentor_count}</h6></div>
    //                 <div><h6>{workshopData.max_mentor_num}</h6></div>
    //                 <div className="register"><button type="submit" onClick={handleSubmit}>Sign up as a mentor</button></div>
                    
                   
                    
    //             </div>
                
    //         </div>

    //         </div>
            
            
            
    //     </div>
        

    // )
};

export default WorkshopDetail;