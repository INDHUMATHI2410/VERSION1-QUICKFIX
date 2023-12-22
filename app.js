const express = require("express");
const app = express();
const mysql = require("mysql");
const path = require("path");
const hbs = require("hbs");

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "Indhu@2002",
    database: "indhu"
}
);
app.use(express.urlencoded({extended:false}));
app.use("/auth", require("./routes/auth"));
app.set("view engine","hbs");
app.get("/", (req,res)=>{
    res.render("home");
});
app.get("/login", (req,res)=>{
    res.render("login");
});
app.get("/signup", (req,res)=>{
    res.render("signup");
});
app.get("/main", (req,res)=>{
    res.render("main");
});
app.get("/products",(req,res)=>{
    res.render("products");
});
app.get("/refapp",(req,res)=>{
    res.render("refapp");
});
app.get("/cookapp",(req,res)=>{
    res.render("cookapp");
});
app.get("/wapp",(req,res)=>{
    res.render("wapp");
});
app.get("/happ",(req,res)=>{
    res.render("happ");
});
app.get("/kitapp",(req,res)=>{
    res.render("kitapp");
});
app.get("/form",(req,res)=>{
    res.render("form");
});
app.get("/admin",(req,res)=>{
    res.render("admin");
});
app.get("/suggestion",(req,res)=>{
    res.render("suggestion");
});
const location = path.join(__dirname,'./public');
app.use(express.static(location));
app.listen(2000, ()=>{
    console.log("Server connected");
});