/*jslint es6 */
import express from 'express';
import { address } from 'ip';
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!<br><br>Local IP =' + address()));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));