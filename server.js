const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const morgan = require('morgan');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/outdoors_app');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(morgan('common'));
app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', "ejs");

//import Mongoose schema
const User = require('./models/users');
const Post = require('./models/posts');

//sample posts
const posts = [
    {title: "Colorado", content: "Mountain scene", image: "./public/ward.jpg"},
    {title: "Colorado", content: "Mountain scene", image: "https://cdn.photographylife.com/wp-content/uploads/2012/10/Horsethief-Sunset.jpg"}
]
//ROOT ROUTE
app.get('/home', (req,res)=> {
    res.send('Testing home page');
});

//POSTS show page
app.get('/posts', (req,res)=> {
    res.render('posts', {posts: posts});
})

//GET login page
app.get('/login', (req,res)=> {
    //grab data in form and use it to log user in 
    //render login form
    res.render('login');
});

//GET register page
app.get('/register', (req,res)=> {
    //grab data in form and use it to register new user
    let newUser = new User({username: req.body.username}); 
    //add to DB?, 
    //render login form
    res.render('login');
});


//POST new posts
app.post('/post', (req,res)=>{
    //check required fields here
    //const requiredFields = ['title', 'content'];


    Post.create({
        title: req.body.title,
        content: req.body.content
    })
    .then(Post=>res.status(201).json(Post))
    .catch(err=>{
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
    });
})

app.listen(process.env.PORT || 8080, function(){
    console.log("Server started");
});

module.exports = {app};