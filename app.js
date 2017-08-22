const express = require("express")
const mustacheExpress = require("mustache-express")
const bodyParser = require("body-parser")
//const models = require("./models")
const routes = require("./routes/router")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine("mustache", mustacheExpress())

app.set("views", "./templates")
app.set("view engine", "mustache")
app.use(express.static("public"))

app.use(routes)

app.listen(3000, () => {
  console.log("I've got the magic in me!")
})

//const fs = require('fs');
//const path = require('path');
//const expressValidator = require("express-validator");
//const morgan = require("morgan");

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'mustache')
//app.set('layout', 'layout');
//app.use('/static', express.static('static'));

//app.use(bodyParser.urlencoded({extended: false}));
//app.use(expressValidator());
//app.use(morgan('dev'))

//app.use(routes);
