const mongoose = require ( '../db/connection' )

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

module.exports = mongoose.model ( 'Recipe', Recipe )