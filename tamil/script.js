// //const http=require ('http');
// function rqlistener(req,res)
// {
//     console.log (req);
// }
// const server = http.createServer(rqlistener);
// server.listen(3000)


const http = require('http');
const server = http.createServer ((req, res)=>{
    // console.log(req)
    if (req.url  == "/"){
        res.write("Hello Mani")
        res.end()
    }
    else{
        res.write("Invaild url")
        res.end()
    }
})
server.listen(8080)