import React, { useState, useEffect } from 'react'
import { FaSearchengin } from 'react-icons/fa';
import Meal from './Meal';

const Home = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [meals, setMeals] = useState([]);
    

    let url;
    let urlSearch = `s=${search}`;
    if (search) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?${urlSearch}`;
    }


    const getMeals = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();

            console.log(data);

            const { meals } = data;

            if (meals) {
                const newMeals = meals.map(meal => {
                    const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb, strYoutube } = meal;
                    return { id: idMeal, name: strMeal, type: strCategory, nationality: strArea, description: strInstructions, img: strMealThumb, video: strYoutube };
                })
                setMeals(newMeals);
            }

            setLoading(false);



        } catch (err) {
            console.log(err);
            setLoading(false);
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    useEffect(() => {
        getMeals();
    }, [search])
    return (


        <main className="main-container">
            <div className='meal-finder'>
                <h1 className='app-name'>Meal Finder</h1>
                <form onSubmit={handleSubmit}>
                    <input className='search-field' type='text' placeholder="Search for meals or keywords" onChange={(e) => setSearch(e.target.value)} />
                    <button className='search-button' type='submit'><FaSearchengin /></button>
                </form>
            </div>
            <div className='search-results'>
                {loading ? <p className='loading'></p> : <h2 className='search-heading'>search results for: {search}</h2>}
            </div>
            <div className='meal-container'>
                {
                    search && meals.map(meal => {
                        return <Meal key={meal.id} {...meal} />
                    })

                }
            </div>
        </main>
    )
}

export default Home;