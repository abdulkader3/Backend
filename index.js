require('dotenv').config()


console.log('this is just a begining')

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get( '/my' , (req , res)=>{
    res.send('shanto is the best')
})

app.get('/shanto' , (req , res)=>{
    res.send('<h1>text karahaho<h1/>')
})

app.get('/facebook' , (req , res)=>{
    res.send('<h2>the most pupolar kid is shanto in his class<h2/>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})