
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
      //fkey
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('RESTRICT'); // needs testing

      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('RESTRICT'); // needs testing

      table.float('quantity')
        .unsigned()
        .notNullable();

    })
};
// float syntax 
// float — table.float(column, [precision], [scale])
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
