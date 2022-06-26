var express = require('express');
var router = express.Router();
const db=require('../models');
const {tsummit}=require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/index');
});
router.get('/user/registered',(req,res)=>{
  res.render('user/registered');
})


router.post('/summitform',function(req,res,next){
  console.log("submitting form is working here at summit form");

  var college=req.body.college,
  location=req.body.location,
  d1Name=req.body.delegateonename,
  d1Email=req.body.delegateonemail,
  d1phno=req.body.delegateonephno,
  d2Name=req.body.delegatetwoname,
  d2Email=req.body.delegatetwomail,
  d2phno=req.body.delegatetwophno,
  d3Name=req.body.delegatethreename,
  d3Email=req.body.delegatethreemail,
  d3phno=req.body.delegatethreephno,
  d4Name=req.body.delegatefourname,
  d4Email=req.body.delegatefourmail,
  d4phno=req.body.delegatefourphno;
 
  tsummit.create({

    college:college,
    location:location,
    delegateonename:d1Name,
    delegateonemail:d1Email,
    delegateonephno:d1phno,
    delegatetwoname:d2Name,
    delegatetwomail:d2Email,
    delegatetwophno:d2phno,
    delegatethreename:d3Name,
    delegatethreemail:d3Email,
    delegatethreephno:d3phno,
    delegatefourname:d4Name,
    delegatefourmail:d4Email,
    delegatefourphno:d4phno

  }).then(result=>res.json({ Ok: true }))
    .catch(err=>res.json({ Ok: false }));
});


module.exports = router;
