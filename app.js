const express = require('express');
const morgan = require('morgan');
const mongoose = require ('mongoose');


//express app 
const app = express ();

//connect to mongodb

// const dbURI ='mongodb+srv://<xue>:<clusters!>@cluster0.hlemy.mongodb.net/cluster1?retryWrites=true&w=majority';
// mongoose.connect (dbURI,{useNewUr});
//register view engine
app.set('view engine','ejs');

// listen for requests 
app.listen(3000);



//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// respons requests

app. get('/index',(req, res) => {
   
    res.render('index.ejs',{title:'Home'});     //take view and sent to the browers,只要写what is view name 

});


 app. get('/about',(req, res) => {
   
    res.render('about.ejs',{title:'About'});

});

app.get('/contact',(req,res)=>{
    res.render('contact.ejs',{title:'Contact'})
});


app.get('/courses',(req,res)=>{
    res.render('courses.ejs',{title:'Courses'})
});

app.get('/create',(req,res)=>{
    res.render('create.ejs',{title:'Ideas'});

});

// 404 page
app.use ((req,res)=>{
    res.status(404).render('404.ejs',{title:'404'});

});

