const express = require("express")
const router = express.Router()
const models = require("../models")

router.get("/", function(req, res) {
  models.toDo
    .findAll()
    .then(todos => {
      const todoData = {
        todos: todos.filter(todos => !todos.completed),
        fintodos: todos.filter(todos => todos.completed)
      }
      res.render("index", todoData)
    })
    .catch(err => {
      console.log(err)
    })
})

router.post("/add", (req, res) => {
  const description = req.body.description

  todos.push({ id: todos.length + 1, completed: false, description: description })
  res.redirect("/")
})

router.post("/completed", (req, res) => {
  const id = parseInt(req.body.id)
  let fintodo = todos.find(todos => todos.id === id)
  if (fintodo) {
    fintodo.completed = true
    fintodo.when = new Date()
  }
  res.redirect("/")
})
module.exports = router
