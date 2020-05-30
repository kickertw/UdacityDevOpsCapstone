const express = require('express')
const app = express()
const port = 8080
const ip = require('ip');

app.get('/', (req, res) => res.send('Hello World!<br><br>Local IP =' + ip.address()))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))