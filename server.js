var express = require('express');
var app = express();
const PORT            = process.env.PORT || 8080;
const bodyParser      = require("body-parser");
const sass        = require("node-sass-middleware");
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
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

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