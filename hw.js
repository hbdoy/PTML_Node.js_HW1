var http = require('http');
var port = 7774;
var hostname = '127.0.0.1';
var request = require('request');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    request.post('http://ycchen.im.ncnu.edu.tw/join.php', {
    form:{
        name: '李禹叡',
        sex: 'male',
        isHandsome: 'Yes'
    }}, function(err, httpResponse, body){
        res.write(body);
        res.end();
    });
}).listen(port, hostname);