const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true,useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Successfully connection.")
})

app.get('/', (req,res) => {
    res.send("Welcome!")
})

app.use('/todos', require('./routes/todos.js'));

app.listen(PORT, () => {
    console.log("Serves listening on port: 5000");
})