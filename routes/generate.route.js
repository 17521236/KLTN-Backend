const express = require('express');
const router = express.Router();
const Apartment = require('../models/apartment');
const Resident = require('../models/resident');
const Vehicle = require('../models/vehicle');
const Block = require('../models/block');
const HELPER = require('../helper');
const ObjectId = require('mongoose').Types.ObjectId;

router.post('/vehicle', async (req, res) => {
    try {
        const listResident = await Resident.find({});
        for (let i of listResident) {
            const newVehicle = {
                residentId: i._id,
                licensePlate: `${Math.round(Math.random() * 100)}C1-${Math.round(Math.random() * 100000)}`,
                price: Math.round(Math.random() * 100000000),
                type: "MOTORBIKE"
            }
        }
        res.send(listResident);
        return;
    } catch (error) {
        res.status(400).send(HELPER.errorHandler(error, 2000));
        return;
    }
})

router.post('/resident', async (req, res) => {
    try {
        const aptList = await Apartment.find({ blockId: ObjectId("60cf0a2a7772c33e808623f3") });
        for (let i of aptList) {
            // add account
            let data = {
                aptId: i._id,
                blockId: "60cf0a2a7772c33e808623f3",
                dateOfBirth: 80413000000 + Math.round(Math.random() * 1000000),
                email: "",
                identityCard: `245${Math.round(Math.random() * 1000000)}`,
                name: "Nguyễn Văn Hưng",
                note: "",
                phoneNumber: "0897556478",
                type: "0"
            };
            data.password = "";
            data.avatarUrl = "";
            data.hasAccount = false;
            var newResident = new Resident(req.body);
            // end add account
            let result = await newResident.save();
        }
        res.send(aptList);
        return;
    } catch (error) {
        res.status(400).send(HELPER.errorHandler(error, 2000));
        return;
    }




    try {
        //  save
        let result = await newResident.save();
        res.send(result);
        return;
    } catch (error) {
        res.status(400).send(HELPER.errorHandler(error, 1000));
        return;
    }
})

module.exports = router;