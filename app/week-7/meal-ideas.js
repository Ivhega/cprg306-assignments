'use client';

import React, { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas || []);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="mx-10 my-5">
      <h2 className="text-2xl">Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="my-2 p-2 border-b border-gray-200">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 inline-block mr-4" />
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
