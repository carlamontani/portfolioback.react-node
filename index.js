const express = require ("express");
const cors = require ("cors");
const app = express();

app.use(cors());

const port = process.env.PORT|| 8080;

const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");
const education = require ("./JSON/Education.json");

app.get('/about', (req, res) => {
    res.json(about)
});

app.get('/portfolio', (req, res) => {
    res.json(portfolio)
});

app.get('/education', (req, res) => {
    res.json(education)
});



app.listen(port, ()=>{
    console.log(`Server on : ${port}`)
} )
