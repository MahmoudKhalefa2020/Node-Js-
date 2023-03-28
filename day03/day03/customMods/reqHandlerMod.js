function GetUrlAction(url) {
	url = url.split("/");

	if (url.length == 2 && url[1] == "") {
		return "home";
	} else {
		return url[1];
	}
}

function GetUrlBody(url) {
	url = url.split("/");
	let [, , ...urlArr] = url;

	return urlArr;
}

function GetRequestBody(req) {
	body = "";
	req.on("data", (chunk) => {
		body += chunk.toString();
		//console.log(chunk);
	});
	req.on("end", () => {
		console.log(body);
		return body;
	});
}

function ConvertBodyToObj(body) {
	let arr = body.split("&");
	let obj = {};
	arr.reduce((prev, curr) => {
		const [key, value] = curr.split("=");
		prev[key] = value;
		return prev;
	}, obj);

	return obj;
}

module.exports = {
	GetUrlAction, GetUrlBody, GetRequestBody, ConvertBodyToObj
};
