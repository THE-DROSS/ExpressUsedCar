var server = require("./server");
var router = require("./router");
var formidable = require("formidable");

var accepts = require("accepts");


var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route,handle);