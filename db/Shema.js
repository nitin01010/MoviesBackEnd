const mongoose = require("mongoose");

const MoviesShema = mongoose.Schema({
    title: String,
    description: String,
    rating: String,
    img: String,
});


const MoviewModel = mongoose.model('Movies', MoviesShema);

module.exports = MoviewModel