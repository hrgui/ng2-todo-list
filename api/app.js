var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
let todos = [{id: 1, message: 'hello world'}];
let todoId = 1;

app.use(cors());
app.use(bodyParser.json());

router.get('/todos?', function(req,res) {
  res.json(todos);
});

router.post('/todos?', function(req, res) {
    let todo = req.body;
    todo.id = ++todoId;
    todos.push(todo);
    res.json(todo);
  });

router.route('/todo/:id')
  .delete(function(req,res) {
    let id = Number(req.params.id);
    let todo = todos.filter(todo => todo.id === id)[0];

    if (!todo) {
      res.json({});
      return;
    }

    let todoIndex = todos.indexOf(todo);
    todos.splice(todoIndex, 1);
    res.json(todo);

    // let todo = todos.splice(Number(req.params.id) - 1, 1)[0];
    // res.json(todo);
  })
  .put(function(req,res) {
    try {
      let todo = todos.filter(todo => String(todo.id) === req.params.id)[0];

      // copy over req.body
      if (!req.body) {
        res.json(todo);
        return;
      }
      for (var prop in req.body) {
        if (req.body.hasOwnProperty(prop)) {
          todo[prop] = req.body[prop];
        }
      }
      res.json(todo);
    } catch(e) {
      res.json({error: "not found"});
    }
  });

app.use('/api', router);

app.listen(3000);