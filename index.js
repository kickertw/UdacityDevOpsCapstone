/* global require */
const express = require('express');
const ip = require('ip');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<img src="https://media1.tenor.com/images/b0405fa5f1a494690eb738efd549d432/tenor.gif?itemid=15805264"/><br><br>This is my Capstone NodeJS App!<br/><br/>Local IP =' + ip.address()));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));