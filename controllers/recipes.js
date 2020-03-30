
const express = require('express')
const router = express.Router()

const Recipe = require('../models/Recipe')
const Chapter = require('../models/Chapter')

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

router.post('/', (req, res) => {
  const newRecipe = {
    name: req.body.name,
    directions: req.body.directions,
    submittedBy: req.body.submittedBy
  }
  Chapter.findOne({mainProtein: req.body.mainProtein})
    .then(chapter => {
      if (!chapter) {
        Chapter
        .create({mainProtein:req.body.mainProtein})
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
  // let chapter = async Chapter.findOne({mainProtein: req.body.mainProtein})
  //   if (!chapter._id) {
  //       let newChapter = await Chapter.create({mainProtein:req.body.mainProtein})
  //       newRecipe.mainProtein = newChapter._id
  //       let newlyCreatedRecipe = await Recipe.create(newRecipe)
  //       res.json(newlyCreatedRecipe)
  //   } else {
  //       newRecipe.mainProtein = chapter._id
  //       let newlyCreatedRecipe = await Recipe.create(newRecipe)
  //       res.json(newlyCreatedRecipe)
  //   }
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