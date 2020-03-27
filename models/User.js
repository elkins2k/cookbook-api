const mongoose = require ( '../db/connection' )

const User = new mongoose.Schema ({
  email: String,
  firstName: String,
  lastName: String
})

module.exports = mongoose.model ( 'User', User )