const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname + '/dist'))

const port = process.env.PORT || 3000

app.get('',(req,res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})


app.listen(port,() => console.log('Server started on : ' + port))