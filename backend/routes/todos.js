const router = require('express').Router();
const Todo = require('../models/todo.model');

router.route('/add').post((req,res) => {
    const text = req.body.text;
    const date = Date.parse(req.body.date);

    const newTodo = new Todo({
        text,
        date
    })

    console.log(newTodo);
})

module.exports = router;