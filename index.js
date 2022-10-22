const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/category.json');


app.get('/', (req, res) => {
    res.send('Api is running');

    app.get('/news-categories', (req, res) => {
        res.send(categories);
    });


});
app.listen(port, () => { 
    console.log('news server',port);
})
