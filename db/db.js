const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.uri


const Main = async () => {
    try {
        await mongoose.connect(uri);
        console.log('mongoose is connect');
    } catch (error) {
        console.log('there is one error', error);
    }
}

Main();



