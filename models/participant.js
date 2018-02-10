const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var Participant = mongoose.Schema('Participant', {
  nom_field: {
    type: String,
    required: true, //validator
    minlength: 1, //validator
    trim: true //validator
  },
  prenom_field: {
    type: String,
    required: true, //validator
    minlength: 1, //validator
    trim: true //validator
  },
  pseudo_field: {
    type: String,
    required: true, //validator
    minlength: 1, //validator
    trim: true //validator
  },
  dateDeNaissance_field:{
    type: String,
    required: true, //validator
    minlength: 1, //validator
    trim: true //validator
  },
  numTelephone_field:{
    type: Number,
    required: true, //validator
    minlength: 1, //validator
  },
  email_field:{
    type: String,
    required: true, //validator
    minlength: 1, //validator
    trim: true //validator
  }

});


module.exports = {Participant};
