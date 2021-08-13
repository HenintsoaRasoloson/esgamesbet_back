let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TypeUserSchema = Schema({
        _id:String,
        IdType : String,
        NomType : String,
});

module.exports = mongoose.model('TypeUser', TypeUserSchema);