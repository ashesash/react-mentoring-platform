import React from 'react';
import { Link } from 'react-router-dom';
import "./WorkshopCard.css";
import Location from './Location';
import PhoneNumber from './PhoneNumber';

// Where do we add the workshop-container div, to style them all?
function WorkshopCard({workshopData}) {
    console.log(workshopData)
    return (
        <div className="card">
            <div className="card_title">{workshopData.title}</div>
            <div className="card_body">
                <p>Title: {workshopData.description}</p>
                {/* This breaks it for some reason: <p>Max spaces available:{max_mentor_num}</p> */}
                <p>Number of applications:{workshopData.mentor_count}</p>
                {/* Might be nice to render if is open or not. Nothing renders as it is a bool: {workshopData.is_open} */}
                {/* Might be worth adding a location <Location location={workshopData.location}></Location> */}
                {/* Same goes for contact number: <PhoneNUmber type="Mobile" number={workshopData.phone}></PhoneNUmber> */}
                <div className="card_image">
                    <img src={workshopData.image}/>
                </div>
            </div>
        </div>
    )
};

export default WorkshopCard;
        // <div className='all-workshops-1'>
        //     <Link to={`/workshops/${workshopData.id}`}>
        //         <div className='all-workshops-1a'>
        //             {/* <div>
        //                 <img src={workshopData.image}/>
        //             </div> */}
        //             <div className='all-workshops-1b'>
        //                 <h3>{workshopData.title}</h3>

        //             </div>
        //         </div>
        //         {/* <h3>{workshopData.title}</h3> */}
        //     </Link>
        // </div>

// function WorkshopCard({workshopData}) {
//     return (
//         <div className='workshops-overview'>
//             <div className='workshop1'>
//                 <Link to={`/workshops/${workshopData.id}`}>View workshop</Link>
//             </div>
//         </div>
//     )
// };