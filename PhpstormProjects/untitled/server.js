var http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World \n');
    response.write('AWS challenge \n');
    response.write('Dont worry \n');
    response.end();
}

http.createServer(onRequest).listen(8000);
router.get('/', function (req, res, next) {
    res.json({status: 'UP'});
});
app.use("/health", router);