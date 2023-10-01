const express = require("express");
const MoviewModel = require("../db/Shema");
const router = express();

router.post("/Movies/api/v1", async (req, res) => {
    try {
        const { title, description, rating, img } = req.body;
        const dataSave = await MoviewModel({ title, description, rating, img });
        dataSave.save();
        res.status(201).send('Send');
    } catch (error) {
        console.log('There is one Error');
    }
});

router.get('/Movies/api/v1/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const dataFind = await MoviewModel.findByIdAndDelete({ _id: id });
        res.send({ Message: 'DELETED' });
    } catch (error) {
        res.status(400).send(`there is one ${error}`);
    }
});




module.exports = router;