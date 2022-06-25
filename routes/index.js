var express = require('express');
var router = express.Router();
const db=require('../models');
const {tsummit}=require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/index', { title: 'Athena T summit' });
});

router.get('/user/registered',function(req,res){
  res.render('user/registered');
  console.log("it is not working bro")
})

router.post('/summitform',function(req,res){
  console.log("submitting form is working here at summit form");
  var flag=0;
  const college=req.body.college;
  const location=req.body.location;
  const d1Name=req.body.delegateonename;
  const d1Email=req.body.delegateonemail;
  const d1phno=req.body.delegateonephno;
  const d2Name=req.body.delegatetwoname;
  const d2Email=req.body.delegatetwomail;
  const d2phno=req.body.delegatetwophno;
  const d3Name=req.body.delegatethreename;
  const d3Email=req.body.delegatethreemail;
  const d3phno=req.body.delegatethreephno;
  const d4Name=req.body.delegatefourname;
  const d4Email=req.body.delegatefourmail;
  const d4phno=req.body.delegatefourphno;
  (d1phno==d2phno || d2phno==d3phno || d1phno==d2phno)?flag=1:flag=0;
  (d1Email==d2Email || d2Email==d3Email || d1Email==d2Email)?flag=1:flag=0;
 
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

  }).then(result=>res.send(result))
    .catch(err=>console.log(err));

    
});


module.exports = router;
