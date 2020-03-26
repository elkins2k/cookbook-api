# cookbook-api

## Chapter
>This data collection stores the main protein of each recipe and creates a "chapter" for the cookbook as a virtual table of contents the user can navigate
### Data model
```javascript
const Chapter = new mongoose.Schema ({
    mainProtein: String
})
```
### Router methods
>router.get ('/' ...returns ALL chapters
>router.get ('/:id' ...returns a single chapter
>router.post ('/' ...posts a new chapter and returns that chapter
>router.put ( '/:id' ...updates a single chapter and returns ALL chapters
>router.delete ( '/:id'...deletes a single chapter and return ALL remaining chapters

## Recipe
This data collection stores the recipe as entered by the person that submitted it.
## Data model
const Recipe = new mongoose.Schema ({
  name: String,
  mainProtein: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter'
  },
  ingredients: [{ item: String }],
  directions: String,
  submittedBy: String
})
### Router methods
router.get('/' ...returns ALL recipes

router.get('/:id' ...returns a single recipe

router.post('/' ...

router.post('/:id/newIngredient/' ...

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

router.delete ('/:id/ingredient/:ingredientId', (req,res) => {
  Recipe
    .findById(req.params.id)
    .then(recipe => {
      let ingredientIndex = recipe.ingredients.findIndex(ingredient => ingredient._id === req.params.ingredientId)
      recipe.ingredients.splice(ingredientIndex,1)
      recipe.save()
      res.json(recipe)
    })
})

module.exports = router