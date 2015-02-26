var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    contentTypesReference = {
        ".css": "text/css",
        ".html": "text/html",
        ".js": "application/x-javascript",
        ".jpg": "image/jpeg"
    },
    page404Path = path.join(__dirname, '404.ejs'),
    cache = {};

http.createServer(function (request, response) {

    var filePath = path.join(__dirname, decodeURIComponent(request.url));
    console.log(filePath);

    sendFile(filePath, response);

}).listen(3000, function(){
        console.log('server is running on port 3000');
    });

function getContentType (filePath) {
    var fileExtension = path.extname(filePath);

    return contentTypesReference[fileExtension];
}

function sendFile (filePath, response, status, cache) {
    if (!status) status = 200;

    function serveStaticFiles(response, cache, filePath){
        if (cache[filePath]){
            sendFile(response, filePath, status, cache[filePath]);
        } else {
            fs.readFile(filePath, function (error, fileContent) {

                if (error['path'] === page404Path){
                    response.write("Sorry, the page could not be found");
                } if (error) {
                    sendFile(page404Path, response, 404);
                    console.log(error);
                }else {
                    response.writeHead(status, {"Content-Type": getContentType(filePath)});
                    response.write(fileContent);
                    response.end();
                }
            });
        }

    }
}
