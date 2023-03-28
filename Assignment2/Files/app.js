var fs = require('fs')

fs.rename('./Files/info2.txt', './Files/info3.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed.');
}
    )


// fs.unlink('./info.txt', function (err) {
//         if (err) throw err;
//         console.log('File Removed.');
// })


var dataJsonAsync = fs.readFileSync('./Files/data.json', 'utf8');
console.log(dataJsonAsync);

var dataJson = fs.readFile('./Files/data.json', 'utf8', function(data) {
	console.log(data);
});

var readable = fs.createReadStream('./Files/data.json');
var writable = fs.createWriteStream('./Files/info3.txt');

readable.pipe(writable)

console.log(writable)