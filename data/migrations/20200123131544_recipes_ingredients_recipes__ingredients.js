
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
      table.increments();
      table.string('recipeName').notNullable().index();
      table.text('instructions').notNullable();
    })

    .createTable('ingredients', table => {
      table.increments();
      table.string('ingredientName').notNullable().index();

    })

    .createTable('recipes_ingredients', table => {
      table.increments();

    })
};
// float syntax 
// float — table.float(column, [precision], [scale])
exports.down = function(knex) {
  
};
