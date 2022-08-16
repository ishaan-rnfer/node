const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write('Home Page');
    }
    else if(req.url === '/about') {
        res.write('About Page');
    } else {
        res.write(`
            <h1>Oops!</h1>
            <p>We can't seem to find what you are looking for</p>
            <a href='/'>Back Home</a>
        `)
    }
    res.end();
})

server.listen(4000, () => {
    console.log('server listening on port 4000 ... ');
})