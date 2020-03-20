const mongoose = require ( '../db/connection' )

const User = new mongoose.Schema ({
  email: String,
  name: {
    firstName: String,
    lastName: String
  }
})
module.exports = mongoose.model ( 'User', User )