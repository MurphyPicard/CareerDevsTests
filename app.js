// function nafissa(x,y){console.log(x+y);}
//
// nafissa(4,6);

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  res.writeHead(200, {"Content-Type":"html/text"});
  var contents = fs.readFileSync('index.html');
  console.log(contents);
  res.write(contents);
  res.write("This is dog");
  res.end();

}).listen(8080, function(){
  console.log('listening...');
});
