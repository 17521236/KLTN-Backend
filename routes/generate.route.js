const express = require('express');
const router = express.Router();
const Apartment = require('../models/apartment');
const Resident = require('../models/resident');
const Vehicle = require('../models/vehicle');
const Block = require('../models/block');
const HELPER = require('../helper');
const ObjectId = require('mongoose').Types.ObjectId;

const faker = require('faker');

router.post('/vehicle', async (req, res) => {
    try {
        const listResident = await Resident.find({});
        for (let i of listResident) {
            const data = {
                residentId: i._id,
                licensePlate: `${Math.round(Math.random() * 100)}C1-${Math.round(Math.random() * 100000)}`,
                price: Math.round(Math.random() * 100000000),
                type: "MOTORBIKE"
            }
            const newVechile = new Vehicle(data);
            await newVechile.save();
        }
        res.send([])

    } catch (error) {
        res.status(400).send(HELPER.errorHandler(error, 2000));
        return;
    }
})

router.post('/resident', async (req, res) => {
    //  /// delete by blockId
    // try {
    //     const result = await Resident.deleteMany({ blockId: ObjectId("60cf09e07772c33e808623f2") });
    //     res.send(result)
    // } catch (error) {
    //     res.status(400).send(HELPER.errorHandler(error, 2000));
    //     return;
    // }
    // 60cf09e07772c33e808623f2 - B
    // 60cf09e07772c33e808623f2 - B
    try {
        const aptList = await Apartment.find({ blockId: ObjectId("60cf09e07772c33e808623f2") });
        for (let i of aptList) {
            // add account
            let data = {
                aptId: i._id,
                blockId: "60cf09e07772c33e808623f2",
                dateOfBirth: 739958000000 + Math.round(Math.random() * 1000000),
                email: "",
                identityCard: `245${Math.round(Math.random() * 1000000)}`,
                name: faker.name.findName(),
                note: "",
                phoneNumber: `03${Math.round(Math.random() * 100000000)}`,
                type: "0"
            };
            data.password = "";
            data.avatarUrl = "";
            data.hasAccount = false;
            var newResident = new Resident(data);
            // end add account
            await newResident.save();
        }
        res.send([]);
        return;
    } catch (error) {
        res.status(400).send(HELPER.errorHandler(error, 2000));
        return;
    }
})

module.exports = router;