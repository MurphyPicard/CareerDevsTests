// function nafissa(x,y){console.log(x+y);}
//
// nafissa(4,6);

var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200);

  console.log("hi");
  res.write('Hello there');
  res.end();
}).listen(8080, function(){
  console.log('listening...');
});
