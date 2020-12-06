const router = require('express').Router();
const Todo = require('../models/todo.model');
let list = [];

router.route('/add').post((req,res) => {
    const text = req.body.text;
    const date = req.body.date;

    list.push({
        text : text,
        date : date
    });
})

router.route('/test').post((req,res) => {
    res.send("Test OKEY")
})

router.route('/').get((req,res) => {

    res.send(list);
})

module.exports = router;