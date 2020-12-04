const router = require('express').Router();
const Todo = require('../models/todo.model');

router.route('/add').post((req,res) => {
    const text = req.body.text;
    const date = Date.parse(req.body.date);

    const newTodo = new Todo({
        text,
        date
    })

    newTodo.save()
        .then(() => res.json("Added todo."))
        .catch(err => res.status(400).json("Error: " + err));
})

module.exports = router;