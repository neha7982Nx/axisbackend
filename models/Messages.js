const mongoos = require("mongoose");

const messagechema = new mongoos.Schema({
    message: { type: String, require: true },

})

const messageRecive = mongoos.model("messageRecive", messagechema);

module.exports = messageRecive;


