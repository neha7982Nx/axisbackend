const express = require("express");
const messageRecive = require("../models/Messages");
const router = express.Router();

router.get("/message", async function (req, res) {
    const message = await messageRecive.find().sort({ CharacterData: -1 })
    res.send((message));
})

// router.get("/axismessage", async (req, res) => {
//     let cardData = await messageRecive.find().sort({ createdAt: -1 });
//     res.render("message", { cardData })
// })



// router.post("/message", async function (req, res) {
//     const messagedata = req.body;
//     await messageRecive.create(messagedata);
//     res.json("upadate")


// })

router.post('/message', async (req, res) => {
    try {
        var userDetails = new messageRecive({
            message: req.body.message,
        });
        const message = await userDetails.save();
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    res.send('message got success')
})


module.exports = router;