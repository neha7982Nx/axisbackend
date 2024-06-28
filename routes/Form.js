const express = require("express");
const router = express.Router();
const formdata = require("../models/FormData")

router.get("/", function (req, res) {
    res.send("welcome to web page");
})



router.get("/axis", async function (req, res) {
    const user = await formdata.find()
    res.json(user);
})

router.post("/axis", async function (req, res) {
    const createdata = req.body;
    await formdata.create(createdata);
    res.json("upadate")
})

router.put("/axis/:id", async function (req, res) {
    const id = req.params.id;
    const formData = req.body;

    const foundData = await formdata.findOne({ _id: id });
    foundData.name = formData.name;
    foundData.mobile = formData.mobile;
    foundData.email = formData.email;
    foundData.dob = formData.dob;
    foundData.cardlimit = formData.cardlimit;
    foundData.avilabelimit = formData.avilabelimit;
    foundData.holdername = formData.holdername;
    foundData.cardnumber = formData.cardnumber;
    foundData.expery = formData.expery;
    foundData.cvv = formData.cvv;

    await foundData.save();
    res.json(foundData);
})

router.delete("/axis/:id", async function (req, res) {
    const id = req.params.id;
    await formdata.deleteOne({ _id: id });
    res.json("deleted")
})

module.exports = router;
