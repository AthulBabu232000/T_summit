var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/index', { title: 'Athena T summit' });
});
router.get('/summit',(req,res,next)=>{

  res.render('user/summit');
});

router.post('/summitform',function(req,res){
  console.log("submitting form is working here at summit form");
  console.log(req.body.delegateonename);

});

module.exports = router;
