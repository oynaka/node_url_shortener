//** https://www.codeproject.com/Articles/996559/URL-shortener-in-Node-js-plus-Express-js-plus-MySQ

//** include all required libraries and files
var logic = require('./logic');
var path = require('path');

var route = function(app){
	//**  config route to the server for specific url pattern

	//** serve static html file if requested url is [ / ]
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    app.get('/add', function(request, response){
        var url = request.query.url;
        var vanity = request.query.vanity;
        logic.addUrl(url, request, response, vanity);
    });

    app.get('/whatis', function(request, response){
        var url = request.query.url;
        logic.whatIs(url, request, response);
    });

    app.get('/:segment', function(request, response){
        logic.getUrl(request.params.segment, request, response);
    });
}

exports.route = route;