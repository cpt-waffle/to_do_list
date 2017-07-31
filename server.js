var express = require('express');
var app = express();
const PORT            = process.env.PORT || 8080;
const bodyParser      = require("body-parser");


app.set("view engine", "ejs");

//routes
app.get('/', function(req, res){
  res.render("home/index");
});


app.listen(PORT, () => {
  console.log("App is listenting on port " + PORT);
});