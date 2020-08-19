import React from 'react';
import './InfoCard.css';
import Images from '../../shared/Images';


function InfoCard({ topText, bottomText }) {
    return <div className="info-card">
        <div className="info-card-left">
            <div className="info-card-top-text">{topText}</div>
            <div className="info-card-text">{bottomText}</div>
        </div>

        <div className="info-card-image-container">
            <img 
            src={Images.SmallChart}  
            />
        </div>

    </div>;
}


export default InfoCard;
