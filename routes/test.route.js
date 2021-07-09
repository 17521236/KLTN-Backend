const express = require('express');
const router = express.Router();
const Test = require('../models/test.model');
const Binary = require('mongodb').Binary;

router.post('/', async (req, res) => {
    const tmp = fs.readFileSync(file_path);
    const data = Binary(tmp);
    let newData = new Test(req.body);
    try {
        await newData.save();
    } catch (error) {

    }
})

module.exports = router;