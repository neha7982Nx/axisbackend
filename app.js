const express = require("express");
const app = express();

const mongoose = require("mongoose");
const formDta = require("./routes/Form")
const messageRecived = require("./routes/Message")

const cors = require('cors');
const messageRecive = require("./models/Messages");
// mongoose.connect('mongodb://localhost:27017')
mongoose.connect('mongodb+srv://axis:7393852432@axis.sv4xwax.mongodb.net/?retryWrites=true&w=majority&appName=axis');

app.use(cors());
app.use(express.json());
app.use("/", formDta);
app.use("/", messageRecived);





app.use(async function (req, res, err, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
})





app.listen(5000);