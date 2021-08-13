let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TypeJeuSchema = Schema({
    _id : String,
    id : Number,
    NomJeu : String,
    ImageJeu : String,
    Categorie : Categorie,
});

module.exports = mongoose.model('TypeJeu', TypeJeuSchema);