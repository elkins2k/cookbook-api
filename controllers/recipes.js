
const express = require('express')
const router = express.Router()

const Recipe = require('../models/Recipe')

router.get('/', (req, res) => {
  Recipe
    .find({})
    .then(all => res.json(all))
})

router.get('/:id', (req, res) => {
  Recipe
    .findById(req.params.id)
    .then(single => res.json(single))
})

const Chapter = require('../models/Chapter')
router.post('/', (req, res) => {
  const newRecipe = {
    name: req.body.name,
    ingredients: req.body.ingredients,
    directions: req.body.directions
  }
  Chapter.findOne({mainProtein: req.body.mainProtein})
    .then(chapter => {
      if (!chapter) {
        Chapter
        .create(`{mainProtein:${req.body.mainProtein}}`)
        .then(newChapter => {
          newRecipe.mainProtein = newChapter._id
          Recipe
            .create(newRecipe)
            .then(recipe => res.json(recipe))
      })
    } else {
      newRecipe.mainProtein = chapter._id
        Recipe
          .create(newRecipe)
          .then(recipe => res.json(recipe))
    }
  })
})

router.post('/:id/newIngredient/', (req, res) => {
  Recipe
    .findById(req.params.id)
    .then(item => {
    let newItem = req.body
    item.ingredients.push(newItem);
    item.save();
    res.json(item);
  });  
})

router.put('/:id', (req, res) => {
  Recipe
    .findOneAndUpdate(
      { _id: req.params.id },
      (req.body)
    )
    .then(() => {
      Recipe
        .find({})
        .then(all => res.json(all))
    })
})

router.delete('/:id', (req, res) => {
  Recipe
    .findOneAndDelete({ _id: req.params.id })
    .then(() => {
      Recipe.find({})
        .then(all => res.json(all))
    })
})

module.exports = router