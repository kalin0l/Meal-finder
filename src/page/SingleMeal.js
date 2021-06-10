import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Ingredients from '../components/Ingredients'
import Measures from '../components/Measures'
import './SingleMeal.css'



const SingleMeal = () => {
    const { id } = useParams();
    console.log(id);


    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`

    const [loading, setLoading] = useState(false);
    const [meal, setMeal] = useState([]);

    const getMeal = async function () {
        setLoading(true);

        const res = await fetch(`${url}${id}`);
        const data = await res.json();
        console.log(data);

        if (data.meals) {
            const { idMeal: index, strMeal: name, strCategory: type, strArea: nationality, strMealThumb: img, strInstructions: description, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6 } = data.meals[0];
            const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6];
            const measures = [strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6];
            const newMeal = {
                index, name, type, nationality, img, description, ingredients, measures
            };
            setMeal(newMeal);
            console.log(newMeal)
        }
        setLoading(false);



    }
    useEffect(() => {
        getMeal();
    }, [id])

    console.log(meal)
    const { index, name, type, nationality, img, description, ingredients, measures } = meal;
    console.log(ingredients);


    if (!meal) {
        return (
            <div>
                <NavLink className='link' to='/'>Home</NavLink>
                {loading ? <p className='loading'></p> : <h2 className='section-title'>No meal to display</h2>}
            </div>
        )
    }
    if (loading) {
        return <p className='loading'></p>
    }
    return (

        <div className='single-meal-container'>
            <NavLink className='link' to='/'>Home</NavLink>
            <h1 className='meal-name'>{name}</h1>
            <div className='meal-details'>
                <div className='image-container'>
                    <img src={img} alt={name} className='meal-img' />

                </div>
                <div className='detalils-container'>
                    <div className='food-container'>
                        <h4>Nationality: {nationality}</h4>
                        <h4>Type of food: {type}</h4>
                    </div>
                    <div className='compositions'>
                            <Ingredients {...[ingredients]}/>
                            <Measures {...[measures]}/>
                    </div>

                </div>
            </div>
            <div className='description'>
                <p className='description-text'>{description}</p>
            </div>
        </div>

    )


}

export default SingleMeal;