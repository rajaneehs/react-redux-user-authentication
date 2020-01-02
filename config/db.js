const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost:27017/rr-user-auth`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log(`connected to DB`))
  .catch(err => console.log(`error connecting to DB`))

module.exports = { mongoose }
