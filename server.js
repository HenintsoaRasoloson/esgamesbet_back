let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let pari = require("./routes/pari");
mongoose.Promise = global.Promise;
mongoose.set("debug", true);

const uri =
  "mongodb+srv://root:root@cluster0.cmmnf.mongodb.net/esgamesbet?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(uri, options).then(
  () => {
    console.log("Connecté à la base MongoDB assignments dans le cloud !");
    console.log("at URI = " + uri);
    console.log(
      "vérifiez with http://localhost:8010/api/pari que cela fonctionne"
    );
  },
  (err) => {
    console.log("Erreur de connexion: ", err);
  }
);
// Pour accepter les connexions cross-domain (CORS)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

// les routes
const prefix = "/api";

app
  .route(prefix + "/pari")
  .get(pari.getPari)
  .post(pari.postPari)
  .put(pari.updatePari);

app
  .route(prefix + "/pari/:id")
  .get(pari.getPariById)
  .delete(pari.detelePari);

app
  .route(prefix + "/user/pari/:id")
  .get(pari.getUserPariById)

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log("Serveur démarré  sur http://localhost:" + port);

module.exports = app;
