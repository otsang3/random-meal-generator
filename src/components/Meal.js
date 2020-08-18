import React, { useState } from 'react';
import MealDetails from './MealDetails';

export const MealContext = React.createContext();

function Meal() {

    const [meal, setMeal] = useState(null);

    const handleClick = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(data => setMeal(data))
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <div>
            <div className="flex-column">
                <h3>Need some inspiration? Click below button to generate a random meal!</h3>
                <button onClick={() => handleClick()}>Get Meal</button>
            </div>
            <MealContext.Provider value={meal}>
                {meal !== null && <MealDetails/>}
            </MealContext.Provider>
        </div>
    )
}

export default Meal;