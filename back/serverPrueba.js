var express = require('express');

var mongoose = require ('mongoose');

var cors = require ('cors')

const bodyParser= require('body-parser')

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors())

mongoose.connect('mongodb+srv://federicoloupias:senillosa1@flcluster-5vsgj.mongodb.net/FLmytinerary?retryWrites=true&w=majority',{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true});



var AuthController = require('./AuthController');

app.use('/api/auth', AuthController);



let CitesModel = require ('./models/city')

let ItinerayModel = require ('./models/Itinerary')

let UserModel = require ('./models/user')



/*city.save()
    .then(doc => {
     console.log(doc)
    })
    .catch(err => {
     console.error(err)
    })*/

   /* CitesModel.findOneAndRemove({
    _id:'5dbafcae97bbc307d7b7070e'
  })
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.error(err)
  })*/

// -------------------  CITIES  --------------------------//
app.get('/api/cities', cors(), function(req, res) {
    CitesModel.find()
    .then(
        function(datos){
            return res.send(datos)
        }
    )
    .catch(err =>{
        console.log(err);
    })
})

app.post('/api/cities', cors(), function(req, res) {
    let newCity = new CitesModel({
        name: req.body.name,
        country: req.body.country,
        url: req.body.url
    })
    newCity.save()
    .then(
        function(datos){
            return res.send(datos)
        }
    )
    .catch(err =>{
        console.log(err);
    })
})
//-------------------------------------------------------//

// -------------------  Itinerary  --------------------------//
app.get('/api/itinerary/:id', cors(), function(req, res) {
  let city = {
    cityId: req.params.id
  }
  
  ItinerayModel.find(city)
  .then(
      function(datos){
          return res.send(datos)
      }
  )
  .catch(err =>{
      console.log(err);
  })
})


app.get('/api/itinerary', cors(), function(req, res) {
  ItinerayModel.find()
  .then(
      function(datos){
          return res.send(datos)
      }
  )
  .catch(err =>{
      console.log(err);
  })
})


//-------------------------------------------------------//

// -------------------  Users  --------------------------//


//-------------------------------------------------------//

app.listen(8080, function(){
    console.log('servidor escuchando puerto 8080')
})