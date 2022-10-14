const express = require('express')
const app = express()
require('dotenv').config();
// console.log(process.env.PORT);

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`)
  })