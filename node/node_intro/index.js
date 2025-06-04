console.log("Hello World");

var name = "Dan"

function hello() {
    console.log("Hellow there!!!" + name);
}

hello();

// () => {
//     console.log("Hellow there!!!");
// }


// creating server

// const http = require('http');
// const server = http.createServer();

// server.listen(3000);
// console.log('Serfer is running');


const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
    
})

server.listen(3000, function(){
    console.log("Listening on port 3000");
})




// // server.mjs
// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// // run with `node server.mjs`


const path = require('path');
console.log(path.basename(__filename));
console.log(path.extname(__filename));
// console.log(path.format(root));
// console.log(path.parse(__filename));

const os = require('os');
console.log(os.hostname());
console.log(os.totalmem());

const fs = require('fs');
fs.readFile('../../WebDevBasics/Tutorial/May 29/form.html', "utf8", (error, data) => {
    // if (error) {
    //     console.log(error);
    // } else {
    //     console.log(data);
    // }
});

fs.readdir("../../", (error, data) => {
    if(error) {
        console.log(error);
    } else {
        console.log(data);
    }
})


const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on('error', (args) => {
    console.log("error happened", args);
})

emitter.emit('error', {error_no: 148, url: "google.com" });