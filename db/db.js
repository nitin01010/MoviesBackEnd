const mongoose = require("mongoose");

const Main = async () => {
    try {
        await mongoose.connect("mongodb+srv://nitinsachdeva0202:Uz9eWvpXOb7dVsmM@cluster0.dlrvzss.mongodb.net/movies?retryWrites=true&w=majority");
        console.log('mongoose is connect');
    } catch (error) {
        console.log('there is one error', error);
    }
}

Main();

module.exports = Main;


