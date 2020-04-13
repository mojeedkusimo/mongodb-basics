let findInterns = function (myDB) {
    let query = {rating : 7};

    // myDB.collection('myMovies').findOne({}, function (err,result) {
    //     if (err) throw err;
    //     console.log( result);
    // });

    myDB.collection('myMovies').find({}).toArray(function (err,result) {
        if (err) throw err;
        console.log( result );
    });

    // myDB.collection('myMovies').find(query).toArray(function (err,result) {
    //     if (err) throw err;
    //     console.log(result);
    // });

    // myDB.collection('myMovies').find({}, {projection: { movie : 1 }}).toArray(function (err,result) {
    //     if (err) throw err;
    //     console.log(result);
    // });
}

module.exports = findInterns;
