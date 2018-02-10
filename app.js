const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const hbs = require('hbs');


var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');

// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
//   if (err){
//     return console.log('Unable to connect to MongoDB server');
//   } // the return has the function stop here and not run the rest of the code, the alternative would be to put an else statement to put the succes code
//   console.log('Connected to MongoDB server');


var app = express();



app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(__dirname  + '/public'))


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');




app.get('/', (req, res)=>{

  res.render('home.hbs',{})

});

app.get('/list', (req, res)=>{

  res.render('list.hbs',{})

});



app.post('/post-feedback', (req, res)=>{
  dbConn.then((db)=>{
    db.collection('feedbacks').insertOne(req.body);
  });
  res.send('Data received:\n' + JSON.stringify(req.body));
});

// app.post('/post-feedback', (req, res)=>{
//   dbConn.then((db)=>{
//     db.collection('feedbacks').insertOne(req.body);
//   });
//   res.send('Data received:\n' + JSON.stringify(req.body));
// });

// app.get('/view-feedbacks', (req,res)=>{
//   dbConn.then((db)=>{
//     db.collection('feedbacks').find({}).toArray().then((feedback)=>{
//       res.status(200).json(feedbacks);
//     })
//   })
// })


app.listen(3000, ()=>{
  console.log('Server running on port 3000');
});
