var express = require('express');
var router = express.Router();
require('../models/connexion')
const trips = require('../models/trips')
const idOrder = require('./cart')





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
let arrayBook = []

router.post('/idTrip', (req, res)=> {

//faire une boucle pour verifier si l'id est deja dans le tableau
  if(arrayBook.includes(req.body.idTrip)){
    res.json("you already booked this trip")
  }
  else{
    res.json("you booked this trip")
    arrayBook.push(req.body.idTrip)
    console.log(arrayBook)
  }
  


    
 })

// router.get('/idTrip', (req, res)=> {

//   for(let i = 0; i<arrayBook.length;i++){
//     trips.findById(arrayBook[i]).then(data=>{
     
//         res.json(data)
      
//     })
//   }
    
    
// })

router.get('/idTrip', (req, res)=> {

  trips.find({_id:{$in:arrayBook}}).then(data=>{
    res.json(data)
  }
  )

})

router.delete('/deleteTrip', (req, res)=> {
  let id = req.body.id
  trips.findByIdAndDelete(id).then(data=>{
    res.json(data)
  
  }
  )
})

module.exports = router;

