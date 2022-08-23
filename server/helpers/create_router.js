const express = require('express');

const createRouter = function (data) {

  const router = express.Router();

  
  // INDEX

  router.get('/', (req, res) => {
    data
    .find()
    .toArray()
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });


  //SHOW
  router.get('/:id', (req, res) => { 
    res.json(data[req.params.id]); 
  });


  // CREATE
  router.post('/', (req, res) => { 
    data.push(req.body); 
    res.json(data); 
  });


  // UPDATE
  router.put('/:id', (req, res) => { 
    data[req.params.id] = req.body; 
    res.json(data);
  });


  // DELETE
  router.delete('/:id', (req, res) => { 
    data.splice(req.params.id, 1); 
    res.json(data); 
  });

  return router;

};

module.exports = createRouter;
