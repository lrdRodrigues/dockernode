const express = require('express') 
const app = express() 
const port = 8050
const host = '0.0.0.0'

app.get('/', (req, res) =>{
    res.send({message: 'Hello Node from Docker with Nodemon'}) 
})

app.listen(port, host) 