const express = require ( 'express' )
const router = express.Router ()

const User = require ( '../models/User')

router.get ('/', ( req, res ) => {
    User
        .find ({})
        .then ( users => res.json ( users ))
})

router.get ('/:id', ( req, res ) => {
    User
        .findById ( req.params.id )
        .then ( user => res.json ( user ))
})

router.post ('/', ( req, res ) => {
    User
        .create ( req.body )
        .then ( () => {
            User
              .find ({})
              .then (users => res.json ( users ))
        })
})

router.put ( '/:id', ( req, res ) => {
    User
        .findOneAndUpdate (
            { _id: req.params.id },
            ( req.body )
        )
        .then ( () => {
            User
              .find ({})
              .then ( users => res.json ( users ))
        })
})

router.delete ( '/:id', ( req, res ) => {
    User
        .findOneAndDelete ({ _id: req.params.id })
        .then ( () => {
            User.find ({})
            .then (users => res.json ( users ))
        })
})

module.exports = router