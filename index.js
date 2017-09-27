const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const massive = require('massive');
var connectionString="postgres://gnarls@localhost/db"

const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
const massiveConnection = massive(connectionString).then(dbInstance => app.set('db', dbInstance));

const products_controller = require('./products_controller');

app.get('/api/products', products_controller.getAll);
app.get('/api/product/:id', products_controller.getOne);
app.put('/api/product/:id', products_controller.update);
app.post('/api/product', products_controller.create);
app.delete('/api/product/:id', products_controller.delete);







app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
})