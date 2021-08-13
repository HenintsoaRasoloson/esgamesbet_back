let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let TypeUser = require("TypeUser");

let UserSchema = Schema({
    _id :String,
    Typeuser :TypeUser,
    userid :Number,
    Nom: String,
    username : String,
    Datedenaissance : Date,
    email :String,
    motdepasse : String,
    contact : String,
    montantbet: Number,
});

module.exports = mongoose.model('User', UserSchema);