import React from 'react';

const Ingredients = (props) => {
    return (

        <div className='ingredients'>
            <h3>Ingredients</h3>
            <span>1: {props[0]}</span>
            <span>2: {props[1]}</span>
            <span>3: {props[2]}</span>
            <span>4: {props[3]}</span>
            <span>5: {props[4]}</span>
            <span>6: {props[5]}</span>
        </div>
    )
}

export default Ingredients;