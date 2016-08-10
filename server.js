var express = require("express");
var port = process.env.PORT || 8080;

var app = express();

app.get("/", function(req, res) {
   console.log("got request");
   
   var userAgent = req.get("user-agent");
   var regExp = /\(([^)]+)\)/;
   var matches = regExp.exec(userAgent);

   var response = {
       "ipaddress": req.get("x-forwarded-for"),
       "language": req.get("accept-language"),
       "software": matches[1]
   }
   res.json(response);
});

app.listen(port, function() {
    console.log("Listening on port " + port);
});