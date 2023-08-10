// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 3000;

//middleware
app.use(express.static('public'))

// GET - / - returns homepage
app.get('/', (req, res) => {
    res.send("./index.html")

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
  //send the response to send the pets
  //make sure you are requiring the data from data.js
app.get('/api/v1/pets', (req, res) => {
   res.send(pets);
});

// get pet by name
    //deconstruct name
    //request params
    //respond send the deconstructed
app.get('/api/v1/pets/:name', (req, res) => {
    const {name} = req.params
    res.send(`Getting pet by the name ${name}`)


    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response
});

// get pet by owner with query string
    //set deconstructed owner to req.query
    //send the response 
app.get('/api/v1/pets/owner', (req, res) => {
    const {owner} = req.query
    console.log(`Getting the pets owner, ${owner}`)
    res.send(pets)


    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;