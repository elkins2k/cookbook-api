const express = require ( 'express' )
const app = express ()
app.use ( express.json () )

const cors = require ( 'cors' )
app.use ( cors ())

app.use ('/api/users', require ( './controllers/users' ))

app.listen ( 8080, () => console.log ( 'Server running on port 8080!' ))