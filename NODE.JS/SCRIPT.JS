//console.log('hello');

//const fs= reruire("fs");
//fs.writeFileSync("hello text", "hello  from Node.js");

//const http=require('http');
//function rqlistener(req,res){
 //   console.log(req);
//}
//http.createServer(rqlistener);

const http=require('http');
function rqlistener(req,res){
    console.log(req);
}
constserver=http.createServer(rqlistener);
Server.listen(3000)