const mongodb = require('mongodb');
// let interns = require('./collection');

const url = "mongodb+srv://mojeedkusimo:mojeedkusimo@mojeedkusimo-z1mtq.mongodb.net/test?retryWrites=true&w=majority"

const MongoClient = mongodb.MongoClient;

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  
  let myDB = db.db('mojeedkusimo');

  if (myDB) {
      console.log('Database created by mojeedkusimo');
    
  } 

    db.close();
});
