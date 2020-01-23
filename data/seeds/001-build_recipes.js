
exports.seed = function(knex) {

  return knex('recipes').insert([
    {
      id: 1,
      recipeName: 'How to make a Plumbus',
      instructions: `
        .1) Take  the dinglebop and smooth it out with a bunch of schleem
        .2) Repurpose the schleem for later batches
        .3) Take the dinglebop and push it through the grumbo
        .4) Rub fleeb against the dinglebop: It is important that the fleeb is rubbed because it has all of the fleeb JUICE
        .5) A schlami shows up and rubs the dinglebop, then spits on it
        .6) Cut the fleeb
        .7) If you have follwed the steps correctly, there will be several hizzards in the way of the dinglebop
        .8) The blamfs rub against the chumbles
        .9) Both the ploobis and grumbo are shaved away
        .10) You are left with a regular old plumbus
      `
    }
  ]);

};
