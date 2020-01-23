
exports.seed = function(knex) {

  return knex('ingredients').insert([
    {id: 1, ingredientName: 'Dinglebop'},
    {id: 2, ingredientName: 'Schleem'},
    {id: 3, ingredientName: 'Grumbo'},
    {id: 4, ingredientName: 'Fleeb'},
    {id: 5, ingredientName: 'Schlami'}
  ]);

};
