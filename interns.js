let myMovies = [ 
                {movie: "The Banker", year: "2020", rating: 8},  
                {movie: "Bad Boys", year: "2020", rating: 7}, 
                {movie: "The Hunt", year: "2020", rating: 7}, 
                {movie: "Bloodshot", year: "2020", rating: 7.5}, 
                {movie: "First Cow", year: "2020", rating: 6.5} 
            ];
let insertDoc = function (myDB) {
    myDB.collection('myMovies').insertMany(myMovies, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
}
module.exports = insertDoc;