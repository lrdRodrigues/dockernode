const express = require('express') 
const app = express() 
const port = 8080 
const host = '0.0.0.0'

app.get('/', (req, res) =>{
    res.send('Hello Node from Docker') 
})

app.listen(port, host) 