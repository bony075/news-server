const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const categories = require('./data/category.json');
const news = require('./data/news.json');


app.get('/', (req, res) => {
    res.send('Api is running');


});
app.get('/news-categories', (req, res) => {
    res.send(categories);
});
app.get('/news', (req, res) => {
    res.send(news);
});
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(news => news._id === id);
    res.send(selectedNews);
});
app.get('/category_news/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    }
    else {
        const selectedCategory = news.filter(category => category.category_id === id);
        res.send(selectedCategory);
    }

});
app.listen(port, () => {
    console.log('news server', port);
})
