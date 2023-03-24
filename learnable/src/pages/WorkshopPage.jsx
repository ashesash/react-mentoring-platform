import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";





function WorkshopPage(){
    const [projectData, setProjectData] = useState ({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}workshops/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data)
        })
    }, []);
    console.log(projectData);



    return (
        <div>
            <div className="project-block">
            <div className="block1">
                <div>
                    <div>
                        <div className="block1-one"></div>
                    </div>
                    <div>
                        <div className="block1-two"><h2>{projectData.wedding_date}</h2></div>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="block1-three"><h2>{projectData.partner_name1} and {projectData.partner_name2}</h2></div>
                    </div>
                    <div>
                        <div className="block1-four"></div>
                    </div>
                </div>
            </div>
            <div className="block2">
                <div>
                    <div className="profilepic"><img src={projectData.image}/></div>
                    <div><h4>{projectData.title}</h4></div>
                    <div><h6>{projectData.description}</h6></div>
                    <div></div>
                    
                   
                    
                </div>
                
            </div>

            </div>
            
            
            
        </div>
        

    )
};

export default WorkshopPage;