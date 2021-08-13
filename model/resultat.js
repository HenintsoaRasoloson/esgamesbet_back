let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ResultatSchema = Schema({
    _id:String,
    idResultat: Number,
    DateSortieResultat: Date,
    Team1Score : Number,
    Team2Score : Number,
});

module.exports = mongoose.model('Resultat', ResultatSchema);