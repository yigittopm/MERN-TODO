const router = require('express').Router();
const Todo = require('../models/todo.model');

router.route('/add').post((req,res) => {
    const text = req.body.text;
    const date = Date.parse(req.body.date);

    const newTodo = new Todo({
        text,
        date
    })
    res.send(req.body)
})

router.route('/test').post((req,res) => {
    res.send("Test OKEY")
})

router.route('/').get((req,res) => {
    const list = [
        {id: 1 , name: "Mert"},
        {id: 2 , name: "Ali"},
        {id: 3 , name: "Damla"}
    ]
    res.send(list);
})

module.exports = router;