
const express = require ( 'express' )
const router = express.Router ()

const Chapter = require ( '../models/Chapter')

router.get ('/', ( req, res ) => {
    Chapter
        .find ({})
        .then ( all => res.json ( all ))
})

router.get ('/:id', ( req, res ) => {
    Chapter
        .findById ( req.params.id )
        .then ( single => res.json ( single ))
})

router.post ('/', ( req, res ) => {
    Chapter
        .create ( req.body )
        .then ( () => {
            Chapter
              .find ({})
              .then (all => res.json ( all ))
        })
})

router.put ( '/:id', ( req, res ) => {
    Chapter
        .findOneAndUpdate (
            { _id: req.params.id },
            ( req.body )
        )
        .then ( () => {
            Chapter
              .find ({})
              .then ( all => res.json ( all ))
        })
})

router.delete ( '/:id', ( req, res ) => {
    Chapter
        .findOneAndDelete ({ _id: req.params.id })
        .then ( () => {
            Chapter
                .find ({})
                .then (all => res.json ( all ))
        })
})

module.exports = router