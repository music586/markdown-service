var express = require('express');
var router = express.Router();

// 该路由很用的中间件
router.use(function timeLog(req, res, next){
	console.log('Time', Date.now());
	next();
});


router.get('/', function(req, res){
	res.send('this is router hone page');
});

router.get('/about', function(req, res){
	res.send('this is router About page');
})

module.exports = router;