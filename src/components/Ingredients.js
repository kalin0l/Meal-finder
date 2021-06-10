import React from 'react';

const Ingredients = (props) => {
    console.log(props[0])
    return (
        <div className='ingredients'>
            <h3>Ingredients</h3>
            {props[0] && props[0].length > 0 ? props[0].map((item, i) => {
                return <span key={i}>{i + 1}: {item}</span>
            }) : null}
        </div>
    )
}

export default Ingredients;