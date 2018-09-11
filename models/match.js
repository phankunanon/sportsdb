let mongoose = require('mongoose');
let articleSchema = mongoose.Schema({
  teamA:{type:String,required:true},
  teamB:{type:String,required:true},
  date:{type:Date,required:true},
  time:{type:String,required:true},
});
let Article = module.exports = mongoose.model('articles',articleSchema);
