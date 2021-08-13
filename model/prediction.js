let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let PredictionSchema = Schema({
  _id: String,
  prediction_id: String,
  team1bet: Number,
  egalite: Number,
  team2bet: Number,
});

module.exports = mongoose.model('Prediction', PredictionSchema);