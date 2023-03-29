/*Create server 
has some endpoints 
  
login page

 */

var express = require('express');
var app = express();

app.get('/Login', function(req, res) {
  // Login Page
  res.sendFile(__dirname + '/Login.html');
});

// 404 Not Found
app.use(function(req, res) {
  res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(4000, function() {
  console.log('Server is listening on port 4000');
});
