const express = require('express')
const cors = require('cors')
const { mongoose } = require('./config/db')

const {usersRouter} = require('./app/controllers/UsersController')

const app = express()
const PORT = 3002

// middlewares
app.use(express.json())
app.use(cors())
app.use('/users', usersRouter)

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`)
})
