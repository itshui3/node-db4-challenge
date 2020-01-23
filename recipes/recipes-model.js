const db = require('knex')(require('../knexfile').development);

module.exports = {
  getRecipes,
  getRecipeById,  // getRecipesById(id)
  getShoppingList, // getShoppingList(recipe_id)
  getInstructions
}

function getRecipes() {
  return db('recipes');
}

function getRecipeById(id) {
  return db('recipes').where({ id: id })
}

function getShoppingList(recipe_id) {
  return db.select('i.id', 'i.ingredientName', 'ri.quantity').from('recipes_ingredients as ri')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .where({ recipe_id: recipe_id });
}

function getInstructions(recipe_id) {
  return db.select('instructions').from('recipes')
    .where({ id: recipe_id })
}