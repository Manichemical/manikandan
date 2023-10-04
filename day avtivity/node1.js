// // const add=(a,b)=>{
//     return a+(a*b);
// };
// const sum= add(34,56);
// console.log(sum);

// const add= (x,y)=>{
//     return (x-y)*(x+y);
// };
// const sum=add(1001,266);
// console.log(sum);

// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end("welcome");
// }).listen(8080)

const http = require('http');
http.CreateServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end("R.MANIKANDAN");
}).listen(8081)


