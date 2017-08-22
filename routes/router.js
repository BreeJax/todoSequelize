const express = require("express")
const router = express.Router()
const models = require("../models")

router.get("/", function(req, res) {
  models.todo
    .findAll()
    .then(toDo => {
      res.render("index", { todo })
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
