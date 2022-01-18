import React from 'react';
import './Card.css';

const Card = ({name, email, id}) => {
    return (
        <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 card-size card-color'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt={`Robot_${id}`}></img>
            <div className='robo-info'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;