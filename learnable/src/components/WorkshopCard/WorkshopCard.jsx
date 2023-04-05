import React from 'react';
import { Link } from 'react-router-dom';
import "./WorkshopCard.css";
// import Location from './Location';
// import PhoneNumber from './PhoneNumber';

function WorkshopCard({workshopData}) {
    console.log(workshopData)
    return (
        <div className="card">
            <Link to={`/workshops/${workshopData.id}`}>
                <img className="card_image" src={workshopData.image}/>
            </Link>
            <div className="card_body">
            <Link to={`/workshops/${workshopData.id}`}><h3 className="card_title">{workshopData.title}</h3></Link>
                <p>{workshopData.description}</p>
                <p>Positions remaining: {workshopData.max_mentor_num - workshopData.mentor_count}</p>
                <p>Status: {workshopData.is_open ? 'open' : 'closed'}</p>
                {/* Might be worth adding a location <Location location={workshopData.location}></Location> */}
                {/* Same goes for contact number: <PhoneNUmber type="Mobile" number={workshopData.phone}></PhoneNUmber> */}
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