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
router.post("/add", function(req, res) {
  const newTodo = models.toDo.build({
    decription: req.body.decription,
    completed: false
  })

  newTodo
    .save()
    .then(databaseSavedTodo => {
      res.redirect("/")
    })
    .catch(err => {
      console.log(err)
    })
})
// router.post("/completed", function(req, res) {
//   const updateTodo = models.toDo.update({
//     req.id.update({completed: true}).then(() =>{
//       res.redirect("/")
//     })
//   })
// }
// )
//

router.post("/completed", function(req, res) {
  const id = parseInt(req.body.id)
  //grab id from table
  //change completed to true
  //push changes
  const updateTodo = models.toDo
    .update(
      {
        completed: true
      },
      {
        where: {
          id: id
        }
      }
    )
    .then(databaseSavedTodo => {
      res.redirect("/")
    })
    .catch(err => {
      console.log(err)
    })
})

router.post("/destroy", function(req, res) {
  const id = parseInt(req.body.id)
  models.toDo
    .destroy({
      where: {
        id: id
      }
    })
    .then(deleteTodo => {
      res.redirect("/")
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
