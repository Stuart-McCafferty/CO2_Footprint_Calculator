const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const createRouter = require('./helpers/create_router.js');


const values = [
  {name: "user", c02: 0},
  { name: "Car", c02: 1.80708},
  { name: "Bus", c02: 0.3404},
  { name: "Train", c02: 0.51948},
  { name: "Bike", c02: 0},
  { name: "Nuts", c02: 0.2875},
  { name: "Rice", c02: 0.3375},
  { name: "Potatoes", c02: 0.3625},
  { name: "Tofu", c02: 0.25},
  { name: "Vegetables", c02: 0.25},
  { name: "Fruit", c02: 0.1375},
  { name: "Lentils", c02: 0.1125 },
  { name: "Cheese", c02: 1.9575},
  { name: "Milk", c02: 0.2375},
  { name: "Eggs", c02: 0.4224},
  { name: "Tinned fish", c02: 0.7625},
  { name: "Shelfish", c02: 0.4},
  { name: "Fresh fish", c02: 0.3125},
  { name: "Beef", c02: 3.375},
  { name: "Chicken", c02: 0.8625},
  { name: "Pork", c02: 1.5125},
  { name: "Lamb", c02: 4.9},
  { name: "Turkey", c02: 1.3625},
  { name: "Never travel", c02: 0},
  { name: "Staycation", c02: 0.01},
  { name: "Europe", c02: 0.6},
  { name: "Africa", c02: 2.29},
  { name: "India", c02: 2.2},
  { name: "Asia", c02: 2.75},
  { name: "North America", c02: 1.55},
  { name: "Australasia", c02: 5}

];


const valuesRouter = createRouter(values);
app.use('/api/values', valuesRouter);


app.listen(9000, function () {
  console.log('App is running on port 9000');
})