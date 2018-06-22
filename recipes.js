const mongoose = require('mongoose');
const Recipe = require('./models/recipe.model');
const mockRecipes = require('./data.js')

require('./configs/db.config');

// Iteration 2
const recipe = {
  title: 'Beef and Pepper Stir Fry',
  level: 'Amateur Chef',
  ingredients: [
    '8 oz beef strips',
    '2 teaspoons corn flour',
    '1 small onion',
    '1/2 red pepper',
    '1/2 green pepper',
    '2 tablespoons vegetable oil',
    '1 teaspoons minced garlic',
    '1 teaspoons minced ginger',
    '1/2 cup water'
  ],
  cuisine: 'Fusion',
  dishType: 'Dish',
  image: 'http://www.iaba.com/cookbook/images/recipe_19.png',
  duration: 37,
  creator: 'Valentina Kulma'
}

Recipe.create(recipe)
  .then((recipe) => {
    console.info(recipe.title);
    
    return Recipe.insertMany(mockRecipes)
  })
  .then((recipes) => {
    for (let recipe of recipes) {
      console.info(recipe.title);
    }
    
    return Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { $set: { duration: 100 } }, { new: true });
  })
  .then((recipe) => {
    console.log(`${recipe.title} successfully updated!`);

    return Recipe.findOneAndRemove({ title: 'Carrot Cake' });
  })
  .then((recipe) => {
    console.log(`${recipe.title} successfully removed!`);

    return mongoose.connection.close();
  })
  .catch(error => {
    console.error(error);
  });
