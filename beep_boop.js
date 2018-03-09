
const fs = require('fs');
const concat = require('concat-stream');
const http = require('http');
const through = require('through2');
const split = require('split');
const request = require('request');
const ws = require('websocket-stream');
const trumpet = require('trumpet');

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
// process.stdin.pipe(request.post('http://localhost:8099')).pipe(process.stdout);

//WEBSOCKETS
// const stream = ws('ws://localhost:8099');
// stream.write('hello\n');

// HTML STREAM

//will get html written to stdin
//convert inner html to uppercase for class loud
// pipe all html to tdout

// const tr = trumpet();


// const loudClass = tr.select('.loud').createStream();

// loudClass.pipe(through(function (buff, enc, next) {
// 	this.push(buff.toString().toUpperCase())
// 	next()
// })).pipe(loudClass)

// process.stdin.pipe(tr).pipe(process.stdout)

