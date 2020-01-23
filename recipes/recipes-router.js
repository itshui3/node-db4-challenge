const router = require('express').Router();
const db = require('./recipes-model');

router.get('/', (req, res) => {
  db.getRecipes()
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully retrieved recipes`, resource: resou })
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: `status 500: internal server error, could not retrieve recipes` })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.getRecipeById(id)
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully retrieved recipe`, resource: resou })
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: `status 500: internal server error, could not retrieve recipe` })
    })
})

router.get('/:id/shoppinglist', (req, res) => {
  const id = req.params.id;
  db.getShoppingList(id)
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully retrieved shopping list`, resource: resou })
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: `status 500: internal server error, could not retrieve shopping list` })
    })
})

router.get('/:id/instructions', (req,res) => {
  const id = req.params.id;
  db.getInstructions(id)
    .then( resou => {
      res.status(200).json({ message: `status 200: successfully retrieved instructions`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not retrieve recipe instructions` })
    })
})

module.exports = router;