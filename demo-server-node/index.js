const { write } = require("fs");
const http = require("http");

const HOST = "localhost";
const PORT = 8000;

const writeHtmlResponse = (res, htmlCode) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(htmlCode);
}

const server = http.createServer((req,res)=>{

    const url = req.url;
    console.log("URL es", url );

    if(url === "/other"){
        writeHtmlResponse(res, "<p> Esta es otra ruta. </p>");
    }else{
        writeHtmlResponse(res, "<p> codigo HTML </p>");
    }
});

server.listen(PORT,HOST,() =>{
    console.log(`Servidor corriendo en + 
    http://${HOST}:${PORT}`);
});