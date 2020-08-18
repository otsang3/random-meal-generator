import React, { useContext } from 'react';
import { MealContext } from './Meal';

function MealDetails() {

    const meal = useContext(MealContext);

    let ingredients = [];

    for (let i=1; i<=20; i++) {
        if (meal.meals[0][`strIngredient${i}`]) {
            ingredients.push(
                `${meal.meals[0][`strIngredient${i}`]} - ${meal.meals[0][`strMeasure${i}`]}`
            )
        } else {
            break;
        }
    }

    return(
        <div className="flex-column">
            <div className="flex-row">
                 <img src={meal.meals[0].strMealThumb} width="450" height="450"/>
            <div className="flex-item">
                <h2>{meal.meals[0].strMeal}</h2>
                <p>{meal.meals[0].strInstructions}</p>
            </div>
            </div>
            <div>
                <h3>Ingredients:</h3>
                <ul>
                    {ingredients.map(ingredient => <li>{ingredient}</li>)}
                </ul>
            </div>
            <div>
                <h3>Video Tutorial</h3>
                <iframe 
                width="853" 
                height="505"
                src={`https://www.youtube.com/embed/${meal.meals[0].strYoutube.slice(-11)}`}></iframe>
            </div>
        </div>
        
        
    )
}

export default MealDetails;