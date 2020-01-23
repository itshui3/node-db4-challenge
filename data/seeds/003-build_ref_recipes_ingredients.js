
exports.seed = (knex) => {

  return knex('recipes_ingredients').insert([
    {id: 1, recipe_id: 1, ingredient_id: 1, quantity: 11.1},
    {id: 2, recipe_id: 1, ingredient_id: 2, quantity: 22.2},
    {id: 3, recipe_id: 1, ingredient_id: 3, quantity: 33.3},
    {id: 4, recipe_id: 1, ingredient_id: 4, quantity: 44.4},
    {id: 5, recipe_id: 1, ingredient_id: 5, quantity: 55.5}
  ]);

};
