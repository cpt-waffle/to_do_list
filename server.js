var express = require('express');
var app = express();
const PORT            = process.env.PORT || 8080;
const bodyParser      = require("body-parser");
var knex = require('knex')({
  client: 'postgres',
  connection: {
    host : 'localhost',
    user : 'vasiliy',
    password : '123456789',
    database : 'toDoList'
  },
  pool: { min: 0, max: 7 }
});


app.set("view engine", "ejs");

//routes
app.get('/', function(req, res){
  res.render("home/index");
});

app.get('/search', function(req, res){
  res.render("search/search");
});


app.listen(PORT, () => {
  console.log("App is listenting on port " + PORT);
});