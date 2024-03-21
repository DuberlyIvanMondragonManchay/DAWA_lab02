const express = require('express')
const rutas = require('./rutas')
const app = express()

app.use(rutas)
const port =3000
app.listen(port,()=>console.log(`Server runnin on http://localhost:${port}`))
