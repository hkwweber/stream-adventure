
const fs = require('fs');
const concat = require('concat-stream');
const http = require('http');
const through = require('through2');
const split = require('split');
const request = require('request');

//MEET PIPE
// fs.createReadStream(process.argv[2]).pipe(process.stdout)

//INPUT OUTPUT
// process.stdin.pipe(process.stdout);

// TRANSFORM
//

// const stream = through(function (buffer, encoding, next) {
// 	this.push(buffer.toString().toUpperCase())
// 	next()
// })

// process.stdin.pipe(stream).pipe(process.stdout);

//LINES
// let count = 0;

// process.stdin.pipe(split()).pipe(through(function (line, enc, next) {
// 	count++;

// 	let result = count%2 ? line.toString().toLowerCase() : line.toString().toUpperCase()
// 	this.push(result + '\n')

// 	next()
// })).pipe(process.stdout)

//CONCAT



// process.stdin.pipe(concat((body) => {
// 	process.stdout.write(body.toString().split('').reverse().join(''))
// }))

//HTTP SERVER

// const server = http.createServer((req, res) => {
// 	if (req.method === 'POST') {
// 		const stream = through(function (buffer, enc, next) {
// 			this.push(buffer.toString().toUpperCase())
// 			next()
// 		})
// 		req.pipe(stream).pipe(res)
// 	}
// 	else res.end('nah')
// })

// server.listen(process.argv[2]);

// HTTP CLIENT
process.stdin.pipe(request('http://localhost:8099')).pipe(process.stdout);
