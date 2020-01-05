var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();
var morgan = require("morgan");
var methodOverride = require('method-override');
var axios = require('axios');
// var converse = require('converse');
app.set('secret', "basdlkfjasfa");
// // Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: true}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('dev'));


app.get('/', (req,res) => {
  res.render('movie_input')

});
app.post('/movieresults', (req,res)=>{

    axios.get('https://www.omdbapi.com/?apikey=2393c630',{
      params:  {
        t: req.body.name
    }
  }).then((Data)=>{
          var data = (Data.data);
          res.render('movie_input', data)
          console.log(data);


    });
  });

	app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
