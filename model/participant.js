let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ParticipantSchema = Schema({
    _id : String,
    idParticipant : Number,
    NomParticipant : String,
    ImageParticipant : String,
});

module.exports = mongoose.model('Participant', ParticipantSchema);