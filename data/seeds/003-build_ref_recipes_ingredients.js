
exports.seed = (knex) => {

  return knex('recipes_ingredients').insert([
    {id: 1, recipe_id: 1, ingredient_id: 1, quantity: 11.1},
    {id: 2, recipe_id: 1, ingredient_id: 2, quantity: 11.1},
    {id: 3, recipe_id: 1, ingredient_id: 3, quantity: 11.1},
    {id: 4, recipe_id: 1, ingredient_id: 4, quantity: 11.1},
    {id: 5, recipe_id: 1, ingredient_id: 5, quantity: 11.1}
  ]);

};
