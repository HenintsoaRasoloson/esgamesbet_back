let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Particpant = require("particpant");

let ParticipantMatchSchema = Schema({
    _id: String,
    Team1 : Particpant,
    Team2 :Particpant,
});

module.exports = mongoose.model('ParticipantMatch', ParticipantMatchSchema);