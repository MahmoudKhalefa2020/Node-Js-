/* Route 
Get / → open home page → html; with <title> and <h1> Welcome  
 
(bonus) Using static file CSS */

var express = require('express');
var app = express();

app.get('/Home' , function(req, res) {
  res.sendFile(__dirname + '/Home.html');
});
// OR 
// app.get('/' , function(req, res) {
//     res.sendFile(__dirname + '/Home.html');
//   });

app.use(express.static(__dirname + '/Public'));
// 404 Not Found
app.use(function (req, res) {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(4000);
{
  console.log("Server is listening on port 4000");
}
