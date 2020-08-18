
var https = require('https');  
var fs = require('fs');        
 
const hostname = '10.12.8.123';
const port = 3000;
 
var options = {
	key : fs.readFileSync('./cer/server-key.pem'), 
	cert : fs.readFileSync('./cer/server-cert.pem')
}

var html = fs.readFileSync('./demo.html');
 
const server = https.createServer(options ,(req, res) => { 
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/html');   
  res.end(html);
}); 

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
})   
