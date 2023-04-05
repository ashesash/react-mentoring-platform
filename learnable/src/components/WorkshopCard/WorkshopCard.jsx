import React from 'react';
import { Link } from 'react-router-dom';
import "./WorkshopCard.css";

function WorkshopCard(props) {
    const { workshopData } = props;
    console.log(workshopData)
    return (
        <div className='all-workshops-1'>
            <Link to={`/workshops/${workshopData.id}`}>
                <div className='all-workshops-1a'>
                    {/* <div>
                        <img src={workshopData.image}/>
                    </div> */}
                    <div className='all-workshops-1b'>
                        <h3>{workshopData.title}</h3>

                    </div>
                </div>
                {/* <h3>{workshopData.title}</h3> */}
            </Link>
        </div>

    )
};

export default WorkshopCard;