const express = require('express')
const app = express();

const PORT = process.env.PORT || 3233;
const posts = require('./posts')
const poetry = require('./poetry')
const marketing= require('./marketing')

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

app.get('/', (req, res) => {
    res.send('Api is running.')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
