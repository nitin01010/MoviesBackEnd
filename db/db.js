const mongoose = require("mongoose");
const dburl = 'mongodb+srv://nitinsachdeva0202:Uz9eWvpXOb7dVsmM@cluster0.dlrvzss.mongodb.net/Movies'


const Main = async () => {
    try {
        await mongoose.connect(dburl);
        console.log('mongoose is connect');
    } catch (error) {
        console.log('there is one error', error);
    }
}

Main();



