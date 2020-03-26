const mongoose = require ( 'mongoose' )

let mongoURI = ''

if (process.env.NODE_ENV === 'production') {
    mongoURI = process.env.MONGODB_URI
} else {
    mongoURI = 'mongodb://localhost/cookbook-api'
}

mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then ( instance => console.log ( `Connected to db: ${instance.connections[0].name}` ))
    .catch ( error => console.log ( 'Connection failed!', error ))
    
module.exports = mongoose