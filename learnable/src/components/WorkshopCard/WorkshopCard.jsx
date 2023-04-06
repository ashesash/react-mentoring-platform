import React from 'react';
import { Link } from 'react-router-dom';
import "./WorkshopCard.css";
// import Location from './Location';
// import PhoneNumber from './PhoneNumber';

function WorkshopCard({workshopData}){
    return (
        <div className="card">
            
            <Link to={`/workshops/${workshopData.id}`}>
                <img className="card_image" src={workshopData.image}/>
            </Link>
            <div className="card_body">
            <Link to={`/workshops/${workshopData.id}`}><h3 className="card_title">{workshopData.title}</h3></Link>
                <p><i>{workshopData.description}</i></p>
                <p><b>Positions remaining: </b>{workshopData.max_mentor_num - workshopData.mentor_count}</p>
                <p><b>Status: </b>{workshopData.is_open ? 'open' : 'closed'}</p>

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