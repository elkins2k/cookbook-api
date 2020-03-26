# cookbook-api

## Chapter
>This data collection stores the main protein of each recipe and creates a "chapter" for the cookbook as a virtual table of contents the user can navigate
### Chapter data model
```js
const Chapter = new mongoose.Schema ({
    mainProtein: String
})
```
### Chapter router methods
>router.get ('/' ...returns ALL chapters

>router.get ('/:id' ...returns a single chapter

>router.post ('/' ...posts a new chapter and returns that chapter

>router.put ( '/:id' ...updates a single chapter and returns ALL chapters

>router.delete ( '/:id' ...deletes a single chapter and return ALL remaining chapters

## Recipe
>This data collection stores the recipe as entered by the person that submitted it.
## Recipe data model
```js
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
```
### Recipe router methods
>router.get('/' ...returns ALL recipes

>router.get('/:id' ...returns a single recipe

>router.post('/' ...posts a new recipe and returns that recipe

>router.post('/:id/newIngredient/' ...posts a new ingredient for a specific recipe and returns that ingredient

>router.put('/:id' ...updates a single recipe and returns ALL recipes

>router.delete('/:id' ...deletes a single recipe and return ALL remaining recipes

>router.delete ('/:id/ingredient/:ingredientId' ...deletes a single ingredient from a recipe and returns that recipe

## User
>This data collection stores the user information that is used to identify the user currently logged in and will be used if a new recipe is submitted
### User data model
```js
const User = new mongoose.Schema ({
  email: String,
  firstName: String,
  lastName: String
})
```
### User router methods
>router.get ('/' ...returns ALL users

>router.get ('/:id' ...returns a single user

>router.post ('/' ...posts a new user and returns ALL users

>router.put ( '/:id' ...updates a single user and returns ALL users

>router.delete ( '/:id' ...deletes a single user and return ALL remaining users