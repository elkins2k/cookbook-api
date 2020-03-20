const mongoose = require ( 'mongoose' )

mongoose
    .connect('mongodb://localhost/cookbook-api', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then ( instance => console.log ( `Connected to db: ${instance.connections[0].name}` ))
    .catch ( error => console.log ( 'Connection failed!', error ))

module.exports = mongoose