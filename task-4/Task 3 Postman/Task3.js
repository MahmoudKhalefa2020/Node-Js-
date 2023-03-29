// Using Postman , URL , HTTP , Rounting

var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.json());

// Define the route for handling signup requests
app.post('/SignUp', (req, res) => {
  var { email, password, username } = req.body;

  // Check if the email already exists in the file
  var users = JSON.parse(fs.readFileSync('users.json'));
  var userExists = users.find((user) => user.email === email);

  if (userExists) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  // Create a new user object and save it to the file
  var newUser = { email, password, username };
  users.push(newUser);
  fs.writeFileSync('users.json', JSON.stringify(users));

  res.status(200).json({ message: 'Signup successful' });
});

// Define the route for handling login requests
app.post('/Login', (req, res) => {
  var { email, password } = req.body;

  // Check if the email and password match an existing user in the file
  var users = JSON.parse(fs.readFileSync('users.json'));
  var user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(400).json({ message: 'You entered an email that does not exist. Please signup.' });
  }

  if (user.password !== password) {
    return res.status(400).json({ message: 'You entered the wrong password.' });
  }

  res.status(200).json({ message: `Welcome ${user.username}` });
});

// Define a route for handling 404 errors
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
