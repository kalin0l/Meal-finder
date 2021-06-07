import React from 'react'
import { Link } from 'react-router-dom'


const Meal = ( meal ) => {
    return <div>
        <div  className='meal'>
            <div className='img-container'>
                <h3 className='meal-name'>{meal.name}</h3>
                <img src={meal.img} alt={meal.name} />
                <a href={meal.video}>How to make it</a>
                <span><strong>Nationality: {meal.nationality}</strong></span>
                <span><strong>Type: {meal.type}</strong></span>
                <p className='meal-info'>{meal.description}</p>
                <Link to={`/meal/${meal.id}`}>View More</Link>
            </div>
        </div>
    </div>

}

export default Meal;