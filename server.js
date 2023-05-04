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

    let path  = './views/';

    switch(req.url){

        case '/':
          path += 'index.html';
          res.statusCode = 200;
          break;
        case '/about':
          path += 'about.html';
          res.statusCode = 200;
          break;

        case '/about-me':
            path += 'about.html';
            res.statusCode = 301;
            res.setHeader('Location','/about');
            break;
        
        case '/blog':
          path += 'blog.html';
          res.statusCode = 200;
          break; 
        default:
            path +='404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err ,data) =>{

        if(err){
            console.log(err);
        }else{
            res.write(data);
            res.statusCode = 200;
            res.end();
        }
    })

});

server.listen(3000,'localhost',()=>{

    console.log('listening for request on port 3000');
})