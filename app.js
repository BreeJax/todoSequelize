const express = require("express")
const mustacheExpress = require("mustache-express")
const bodyParser = require("body-parser")
// const models = require("./models")
// const jsonfile = require("jsonfile")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine("mustache", mustacheExpress())

app.set("views", "./templates")
app.set("view engine", "mustache")
app.use(express.static("public"))

// models.User.findOne().then(function(user) {
//   console.log(user)
// })

app.listen(3000, () => {
  console.log("I've got the magic in me!")
})
