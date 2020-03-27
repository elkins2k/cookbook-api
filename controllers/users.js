const express = require('express')
const router = express.Router()

const User = require('../models/User')

router.get('/', (req, res) => {
  User
    .find({})
    .then(all => res.json(all))
})

router.get('/:id', (req, res) => {
  User
    .findById(req.params.id)
    .then(single => res.json(single))
})

router.post('/', (req, res) => {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        User
          .create(req.body)
          .then( () => {
            User.find ({})
            .then (all => res.json(all))
          })
      } else {
        User.find ({})
        .then (all => res.json(all))
      }
  })
})

router.put('/:id', (req, res) => {
  User
    .findOneAndUpdate(
      { _id: req.params.id },
      req.body
    )
    .then(() => {
      User
        .find({})
        .then(all => res.json(all))
    })
})

router.delete('/:id', (req, res) => {
  User
    .findOneAndDelete({ _id: req.params.id })
    .then(() => {
      User.find({})
        .then(all => res.json(all))
    })
})

module.exports = router