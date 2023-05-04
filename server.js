/* const http = require('http');

const  server = http.createServer((req,res) => {

    console.log('request made') 

});

server.listen(3000,'localhost', ()=> {

    console.log('listening for request on port 3000');
}) */

/* const http = require('http');

const server = http.createServer((req ,res ) =>{

    console.log(req.url, req.method);
});

server.listen(3000,'localhost',()=>{

    console.log('listening for request on port 3000');
}) */

/* const http = require('http');



const server = http.createServer((req ,res ) =>{

    console.log(req.url, req.method);

    //header response

    res.setHeader('Content-Type','text/html');
    res.write(`<p>Welcome to the world</p>`)
    res.write(`<p>Welcome to the world again , Sorry you cannot</p>`)
    res.end();
});

server.listen(3000,'localhost',()=>{

    console.log('listening for request on port 3000');
}); */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req ,res ) =>{

    console.log(req.url, req.method);

    //header response

    res.setHeader('Content-Type','text/html');

    fs.readFile('./views/index.html', (err ,data) =>{

        if(err){
            console.log(err);
        }else{
            res.write(data);
            res.end();
        }
    })

});

server.listen(3000,'localhost',()=>{

    console.log('listening for request on port 3000');
})