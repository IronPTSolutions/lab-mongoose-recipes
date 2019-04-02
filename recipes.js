const mongoose = require('mongoose');
const Recipe = require('./models/recipe.model');
const recipes = require('./data.js')

require('./configs/db.config');



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
Recipe.create(data)
  .then(() => {
    return Recipe.updateOne({title:'Rigatoni alla Genovese'},{$set: {duration:100}},{ new: true })
    .then(()=> console.info ('Succesful Update'))
    .catch(() => console.error ('Update Fail'))
    
  })
    .then(()=> {
      return Recipe.deleteOne({ title: 'Carrot Cake' })
    .then(()=>console.info(`successfully removed!`))
   
  })

  .then (() => {
    console.info(`Created Recipe: ${recipe.title}`);
      return data.forEach (recipe => {
        console.info(`Created Recipe: ${recipe.title}`);
      }) 

  })
  .catch(error => console.error(error))
  .then(() => {
    console.info('Log Out');
    return mongoose.disconnect();
  })
  .then(() => 
    console.info('disconnect'))
  

