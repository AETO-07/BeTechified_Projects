const http = require("http");

const server = http.createServer((req, res) => {

    if(req.method === "GET" && req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Wassup, AETO");
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Page not found");
    }
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Raw server running on http://localhost:${PORT}`);
});