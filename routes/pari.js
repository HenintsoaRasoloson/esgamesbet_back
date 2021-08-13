let Pari = require('../model/pari');

// Récupérer tous les pari (GET)

function getPari(req, res){
    Pari.find((err, pari) => {
        if(err){
            res.send(err)
        }
        // console.log(pari);
        res.send(pari);
    });
}

// Récupérer un pari par son id (GET)
function getPariById(req, res) {
    let pari_Id = req.params.id;
  
    Pari.findOne({ id: pari_Id }, (err, pari) => {
      if (err) {
        res.send(err);
      }
      res.json(pari);
    });
  }
function getUserPariById(req,res){
  let user_Id = req.params.id;
  
  Pari.find({ userid: user_Id }, (err, pari) => {

      if (err) {
        res.send(err);
      }
      res.json(pari);
    });
}

// POST
function postPari(req,res){
  const pari = new Pari();
  pari.DatePari = req.body.DatePari;
  pari.userid = req.body.parieur._id;

  pari.parieur._id = req.body.parieur._id;
  pari.parieur.username = req.body.parieur.username;
  pari.parieur.Nom = req.body.parieur.Nom;
  pari.parieur.email = req.body.parieur.email;
  pari.parieur.contact = req.body.parieur.contact;

  pari.Match.DateMatch = req.body.Match.DateMatch;
  pari.Match.ImageMatch = req.body.Match.ImageMatch;
  pari.Match.idMatch = req.body.Match.idMatch;
  pari.Match.TypeJeu.NomJeu = req.body.Match.TypeJeu.NomJeu;
  pari.Match.TypeJeu.ImageJeu = req.body.Match.TypeJeu.ImageJeu;
  pari.Match.TypeJeu.NomJeu = req.body.Match.TypeJeu.NomJeu;

  pari.Match.TypeJeu.Categorie.NomCategorie = req.body.Match.TypeJeu.Categorie.NomCategorie

  pari.Match.ParticipantMatch.Team1.NomParticipant = req.body.Match.ParticipantMatch.Team1.NomParticipant
  pari.Match.ParticipantMatch.Team2.NomParticipant = req.body.Match.ParticipantMatch.Team2.NomParticipant

  pari.prediction.team1bet = req.body.prediction.team1bet;
  pari.prediction.egalite = req.body.prediction.egalite;
  pari.prediction.team2bet = req.body.prediction.team2bet;

  
  console.log(req.body);
  pari.save((err) => {
    if (err) {
      res.json({ message: err});
      console.log(err);
    }else {
      res.json({ message: `pari saved!` });
    }
  });
}
// PUT
function updatePari(req,res){

}
// DELETE
function detelePari(req,res){

}

module.exports = {
    getPari,
    getPariById,
    postPari,
    updatePari,
    detelePari,
    // par user par id 
    getUserPariById,
}