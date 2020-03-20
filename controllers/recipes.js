
const express = require ( 'express' )
const router = express.Router ()

const Recipe = require ( '../models/Recipe')

router.get ('/', ( req, res ) => {
    Recipe
        .find ({})
        .then ( all => res.json ( all ))
})

router.get ('/:id', ( req, res ) => {
    Recipe
        .findById ( req.params.id )
        .then ( single => res.json ( single ))
})

router.post ('/', ( req, res ) => {
    Recipe
        .create ( req.body )
        .then ( () => {
            Recipe
              .find ({})
              .then (all => res.json ( all ))
        })
})

router.put ( '/:id', ( req, res ) => {
    Recipe
        .findOneAndUpdate (
            { _id: req.params.id },
            ( req.body )
        )
        .then ( () => {
            Recipe
              .find ({})
              .then ( all => res.json ( all ))
        })
})

router.delete ( '/:id', ( req, res ) => {
    Recipe
        .findOneAndDelete ({ _id: req.params.id })
        .then ( () => {
            User.find ({})
            .then (all => res.json ( all ))
        })
})

module.exports = router