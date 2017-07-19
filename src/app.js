var express = require('express');
var app = express();
var fs = require('fs');

var router = require('./router');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(router);
// app.get('/', function(req, res){
// 	res.send('Hello Word!');
// });

app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({ dest: 'public/img/'}).array('image'));

app.post('/file_upload', function(req, res){
  console.log(req.files[0]);

  var des_file =  'public/img/' + req.files[0].originalname;
  fs.readFile(req.files[0].path, function(err, data){
    fs.writeFile(des_file, data, function(err){
      if(err){
        console.log(err);
      }else{
        response = {
          message: 'File uploaded successfully',
          filename: req.files[0].originalname
        };
      }
      console.log(response);
      res.end(JSON.stringify(response));

    });
  });
});

// fs.watch();

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});