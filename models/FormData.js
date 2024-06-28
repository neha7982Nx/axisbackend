const mongoos = require("mongoose");


const userschema = new mongoos.Schema({
    name: { type: String, require: true },
    mobile: { type: Number, require: true },
    email: { type: String, require: true },
    dob: Date,
    cardlimit: { type: Number, require: true },
    avilabelimit: { type: Number, require: true },
    holdername: { type: String, require: true },
    cardnumber: { type: Number, require: true },
    expery: { type: Number, require: true },
    cvv: { type: Number, require: true }
})

const FormData = mongoos.model("FormData", userschema);

module.exports = FormData; 