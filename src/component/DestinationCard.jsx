import React from 'react';
import '../App.css'

const DestinationCard = ({ name, location, image, description, price }) => {
    return (
        <div className='mainBox'>
            <div className='card'>
                <h3>{name}</h3>
                <h4>{location}</h4>
                <img src={image} alt='Image' />
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default DestinationCard;