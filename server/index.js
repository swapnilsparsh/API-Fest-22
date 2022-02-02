const express = require('express')
const app = express();
const morgan=require('morgan');
const cors=require('cors');
const bodyParser = require("body-parser");
const mongoose=require('mongoose');


mongoose.connect('mongodb://127.0.0.1/apifest',{
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise=global.Promise;



app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const PORT = process.env.PORT || 3233;
const posts = require('./posts')
const poetry = require('./poetry')
const marketing= require('./marketing')
const health=require('./health')
const sing=require('./sing')
const crypto = require('./crypto')
const dance = require('./dance')
const all=require('./all')
const enter =require("./enter")



//signin and signup
app.use('/signUp', require('./router/signUp'));
app.use('/signIn',require('./router/signIn'));

app.get('/posts/all', (req,res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(all)
})

app.get('/posts', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(posts)
})

app.get('/posts/marketing', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(marketing)
})
app.get('/posts/poetry', (req,res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(poetry)
})

app.get('/posts/health', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(health)
})

app.get('/posts/sing', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(sing)
})
app.get('/posts/crypto', (req,res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(crypto)
})
app.get('/posts/dance', (req,res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(dance)
})
app.get('/posts/enter', (req,res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(enter)
})




app.get('/', (req, res) => {
    res.send('Api is running.')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports=app;
