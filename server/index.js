require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const {getAll, addNewHouse, deleteHouse} = require('./controller');
const {SERVER_PORT, CONNECTION_STRING} = process.env;


app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db',db);
    console.log('DB Connected')
})

app.get('/api/houses', getAll);
app.post('/api/house', addNewHouse);
app.delete('/api/house/:id', deleteHouse);


app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`));


