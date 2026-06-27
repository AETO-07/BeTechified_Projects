const express = require('express');
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.post("/echo", (req, res) => {
res.json({ echoed: req.body})
console.log(req.body)
})

app.get('/', (req, res) => {
  res.send('Hello AETO from Express!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Open this in your browser: http://localhost:${port}/`)
})  