const express = require("express");
const MoviewModel = require("../db/Shema");
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const data = await MoviewModel.find({});
        res.status(200).json(data);
    } catch (error) {
        console.log('there is one error', error);
    }
});


module.exports = router