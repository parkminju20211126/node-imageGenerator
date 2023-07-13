const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

//Enable body parser
app.use(express.json()); //json 형태로 파싱한다.
app.use(express.urlencoded({extended: false}));

//Set static folder
app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public/"));
app.use('/openai', require('./routes/openaiRoutes'));

app.get(
    "/", (req,res) =>
    {res.render("index.ejs");}
);
app.listen(port, () => console.log(`Server Started on port`));