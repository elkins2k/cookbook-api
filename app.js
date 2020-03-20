const express = require ( 'express' )
const app = express ()
app.use ( express.json () )
app.use ( express.urlencoded ({ extended: true }));

const cors = require ( 'cors' )
app.use ( cors ())

app.use ('/api/users', require ( './controllers/users' ))
app.use ('/api/recipes', require ( './controllers/recipes' ))

app.listen ( 8080, () => console.log ( 'Server running on port 8080!' ))