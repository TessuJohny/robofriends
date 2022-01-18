import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        robots.map((robot, i) => {
            return(
                <Card key={robots[i].id} name={robots[i].name} email={robots[i].email} id={robots[i].id} />
            );
        })
    );
}

export default CardList;