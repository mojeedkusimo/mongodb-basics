let updateInterns = function (myDB) {

    let query = {movie : 'The Banker'};
    let newValue = { $set : {movie: '3 Idiots', year: '1990', rating: 9}};
    myDB.collection('myMovies').updateOne(query, newValue, function (err, result) {
        if (err) throw err;
        console.log(result.result);
    });
}

module.exports = updateInterns;