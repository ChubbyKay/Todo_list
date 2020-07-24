const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('This todo-list project is made by express.')
})

app.listen(port, () => {
  console.log(`The app is running on localhost:${port}`)
})


