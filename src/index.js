const express = require("express");
const path = require('path');
const app = express();
const port = 7000;
const hbs = require("hbs");

const staticpath = path.join(__dirname,"../");
const rename = path.join(__dirname,"../newdir");
const navbar = path.join(__dirname,"../newdir/partials");

console.log(staticpath)
// to set the view engine

hbs.registerPartials(navbar);


app.set("view engine", "hbs");
app.set("views", rename);


app.use(express.static(staticpath));

// template engin root

app.get("",(req, res)=>{
    res.render('indexFile',{
        dynamic:"this is dynamic button"
    });
})

app.get("/", (req,res)=>{
    res.send("hello this issdf express");
});

app.listen(port, ()=>{
    console.log("listening...",port);
})