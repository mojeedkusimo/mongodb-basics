const mongodb = require('mongodb');
let inserDoc = require('./interns');
let findInterns = require('./findInterns');
let updateInterns = require('./updateInterns');

const url = "mongodb+srv://mojeed:mojeed@mojeedkusimo-z1mtq.mongodb.net/test?retryWrites=true&w=majority";
const MongoClient = mongodb.MongoClient;
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  let myDB = db.db('mojeedkusimo-Task-3');

  // myDB.createCollection('myMovies', function (err, res) {
  //   if (err) throw err;
  //   console.log('collection created!');
  // });
  // updateInterns(myDB);
  findInterns(myDB);
  // inserDoc(myDB);
  // db.close();
  });