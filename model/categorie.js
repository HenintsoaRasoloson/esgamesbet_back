let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let CategorieSchema = Schema({
    _id : String,
    id:  Number,
    NomCategorie: String,
    ImageCategorie:String,
});

module.exports = mongoose.model('Categorie', CategorieSchema);