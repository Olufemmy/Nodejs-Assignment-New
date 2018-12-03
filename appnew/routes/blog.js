
var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
const url = 'mongodb://localhost:27017';
const dbName = 'newproject';
let db;
 
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
db = client.db(dbName);
    insertDocuments(db, function() {
      client.close();
    });
  });




const removeDocument = function(db, callback) {
  const collection = db.collection('documents');
  collection.deleteMany({ a : 2 }, {b : 1}
  	, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });
}




const updateDocument = function(db, callback) {
  const collection = db.collection('documents');
  collection.updateOne({ a : 2 }
    , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });
}




const findDocuments = function(db, callback) {
  const collection = db.collection('documents');
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}




const insertDocuments = function(db, callback) {
  const collection = db.collection('documents');
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}





router.get('/get', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res, next) {
 	res.status(201).send(result);
});

router.put('/update', function(req, res, next) {
  res.send('respond with a resource');
});

router.delete('/delete', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/auth/login', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/auth/signup', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
