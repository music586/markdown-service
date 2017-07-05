var express = require('express');
var router = express.Router();

// 该路由很用的中间件
router.use(function timeLog(req, res, next){
	console.log('Time', Date.now());
	next();
});


router.get('/index', function(req, res){
	res.sendFile(__dirname + '/static/index.html');
});

router.get('/about', function(req, res){
	res.send('this is router About page');
})

module.exports = router;