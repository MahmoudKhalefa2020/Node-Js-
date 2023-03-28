var fs = require("fs");

function ReturnLoginPage(res) {
	res.writeHead(200, { "content-type": "text/html" });
	var html = fs.readFileSync("./staticPages/login.html");

	res.write(html);
}

function ReturnRegisterPage(res) {
	res.writeHead(200, { "content-type": "text/html" });
	var html = fs.readFileSync("./staticPages/Register.html");

	res.write(html);
}

function ReturnProfilePage(userName, res) {
	res.writeHead(200, { "content-type": "text/html" });
	var html = fs.readFileSync("./staticPages/Profile.html", "utf-8");
	html = html.replace("{ReplacecUserName}", userName);

	res.write(html);
}

function ReturnBadRequest(res) {
	res.writeHead(200, { "content-type": "text/html" });
	var html = fs.readFileSync("./staticPages/BadRequest.html", "utf-8");

	res.write(html);
}

function ReturnUserNotFound(res) {
	res.writeHead(200, { "content-type": "text/html" });
	var html = fs.readFileSync("./staticPages/UserNotFound.html", "utf-8");

	res.write(html);
}

function ReturnInCorrectPWD(res) {
	res.writeHead(200, { "content-type": "text/html" });
	var html = fs.readFileSync("./staticPages/InCorrectPWD.html", "utf-8");

	res.write(html);
}

function ReturnHomePage(res) {
	res.writeHead(200, { "content-type": "text/html" });
	var html = fs.readFileSync("./staticPages/HomePage.html", "utf-8");

	res.write(html);
}

module.exports = {
    ReturnLoginPage, ReturnRegisterPage, ReturnProfilePage, 
    ReturnBadRequest, ReturnUserNotFound,
    ReturnInCorrectPWD, ReturnHomePage
}