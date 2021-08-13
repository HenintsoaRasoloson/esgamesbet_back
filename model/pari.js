
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PariSchema = Schema({
    id: Number,
    userid: Number,
    Match : {
        _id : String,
        idMatch : Number,
        TypeJeu : {
            _id : String,
            id : Number,
            NomJeu : String,
            ImageJeu : String,
            Categorie : {
                _id : String,
                id:  Number,
                NomCategorie: String,
                ImageCategorie:String,
            },
        },
        DateMatch :Date,
        ParticipantMatch :{
            _id: String,
            Team1 : {
                _id : String,
                idParticipant : Number,
                NomParticipant : String,
                ImageParticipant : String,
            },
            Team2 : {
                _id : String,
                idParticipant : Number,
                NomParticipant : String,
                ImageParticipant : String,
            },
        },
        Resultat: {
            _id:String,
            idResultat: Number,
            DateSortieResultat: Date,
            Team1Score : Number,
            Team2Score : Number,
        },
        ImageMatch : String,
        EtatMatch : Number,
    },
    DatePari:Date,
    montantbet : Number,
    parieur : {
        _id :String,
        Typeuser : {
            _id:String,
            IdType : String,
            NomType : String,
        },
        userid :Number,
        Nom: String,
        username : String,
        Datedenaissance : Date,
        email :String,
        motdepasse : String,
        contact : String,
        montantbet: Number,
    },
    prediction : {
        _id: String,
        prediction_id: String,
        team1bet: Number,
        egalite: Number,
        team2bet: Number,
    }
})
module.exports = mongoose.model('Pari', PariSchema);