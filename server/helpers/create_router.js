const express = require('express');
const {ObjectId} = require('mongodb')
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
    data
      .findOne({_id: ObjectId(id)})
      // _id is because that is what it's called in the database
      .then((doc) => res.json(doc))
      .catch((err) => {
        res.status(500); 
        res.json({status: 500, error: err});
    })
    
  });


  // CREATE
  router.post('/', (req, res) => {
    const newUser = req.body;
    data
      .insertOne(newUser)
      .then((result) => res.json(result.ops[0]))
      .catch((err) => {
        res.status(500); 
        res.json({status: 500, error: err});
      })
  });


  // UPDATE
  router.put('/:id', (req, res) => {
    const id = req.params.id
    const updatedUser = req.body;
    data
      .updateOne(
        { _id: ObjectId(id) },
        { $set: updatedUser }
      )
      .then(
        (result) => {
          res.json(result)
        }
      )
      .catch((err) => {
        res.status(500); 
        res.json({status: 500, error: err});
      })
  })


  // DELETE
  router.delete('/:id', (req, res) => { 
    data.splice(req.params.id, 1); 
    res.json(data); 
  });

  return router;

};

module.exports = createRouter;
