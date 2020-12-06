const router = require('express').Router();
const Todo = require('../models/todo.model');

router.route('/add').post((req,res) => {
    const text = req.body.text;
    const date = req.body.date;

    const data = new Todo({
        text : text,
        date : date
    })

    data.save()
        .then(res => res.json())
        .catch(err => res.status(400).json(err));    

})

router.route('/').get((req,res) => {
    Todo.find()
        .then(todos => res.json(todos))
})

module.exports = router;