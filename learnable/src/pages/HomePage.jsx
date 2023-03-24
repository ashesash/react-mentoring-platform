import React, { useState, useEffect } from "react";
import workshopPhoto from  "../assets/main.jpg";


function HomePage(){


    return (
            <div>
                <div className="body"><img src={ workshopPhoto } className="main" alt="graphic" /></div>
                <div className="body-text"><p>A platform for skill sharing in tech. Create an account to get started!</p></div>

            </div>
    
        )
};

export default HomePage;
