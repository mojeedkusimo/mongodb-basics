const mongodb = require('mongodb');

const url = "mongodb+srv://mojeedkusimo:mojeedkusimo@mojeedkusimo-z1mtq.mongodb.net/test?retryWrites=true&w=majority"

const MongoClient = mongodb.MongoClient;

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  console.log('Database created by mojeedkusimo');

  db.close();
});
