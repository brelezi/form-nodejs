const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');



var {mongoose} = require('./db/mongoose');
var {Participant} = require('./models/participant');


var app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname  + '/public'))



app.post('/post-feedback', (req, res)=>{

    var participant = new Participant({
      nom_field: req.body.nom_field,
      prenom_field: req.body.prenom_field,
      pseudo_field: req.body.pseudo_field,
      dateDeNaissance_field:req.body.dateDeNaissance_field,
      numTelephone_field:req.body.numTelephone_field,
      email_field:req.body.email_field
    },(err, result) => {
      if(err){
      return console.log('Unable to insert user', err);
    }});



  res.send('Data receive:\n' + JSON.stringify(req.body));



});




app.listen(3000, ()=>{
  console.log('Server running on port 3000');
});
