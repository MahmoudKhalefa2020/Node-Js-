/*Create server 
has some endpoints
  
login page
signup page
home page 
profile page
 */

// Using URL ,HTTP and Routing
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  // Home Page
  res.sendFile(__dirname + '/Home.html');
});

app.get('/Login', function(req, res) {
  // Login Page
  res.sendFile(__dirname + '/Login.html');
});

app.get('/SignUp', function(req, res) {
  // SignUp Page
  res.sendFile(__dirname + '/SignUp.html');
});

app.get('/Profile', function(req, res) {
  // Profile Page
  res.sendFile(__dirname + '/Profile.html');
});

// 404 Not Found
app.use(function(req, res) {
  res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(4000, function() {
  console.log('Server is listening on port 4000');
});


