const express = require('express')
const app = express();

const PORT = process.env.PORT || 3233;
const posts = require('./posts')
const 

app.get('/posts', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(posts)
})

app.get('/posts/marketing', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(marketing)
})

app.get('/', (req, res) => {
    res.send('Api is running.')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
