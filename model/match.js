let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let TypeJeu = require('TypeJeu');
let ParticipantMatch = require('ParticipantMatch');
let Resultat = require('Resultat');

let MatchSchema = Schema({
    _id : String,
    idMatch : Number,
    TypeJeu : TypeJeu,
    DateMatch :Date,
    ParticipantMatch :ParticipantMatch,
    Resultat: Resultat,
    ImageMatch : String,
    EtatMatch : Number,
});

module.exports = mongoose.model('Match', MatchSchema);