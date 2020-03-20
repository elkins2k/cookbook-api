const mongoose = require ( '../db/connection' )

const Chapter = new mongoose.Schema ({
    mainProtein: String
})

module.exports = mongoose.model ( 'Chapter', Chapter )