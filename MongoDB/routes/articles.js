var express = require('express');
var router = express.Router();
var Articles = require('../models/article');

router.get('/',(req,res)=>{
    const newArticle = new Article({
        title: 'Article Title',
        content: 'Hello there',
        date: Date.now,
        authors: ['Vlad'],
        hero: 'https://cdn.igromania.ru/mnt/authors/f/e/c/8/982/preview/1d8b63ba89d7e367_1200xH.jpg',
    });
    newArticle.save(()=>{
        res.send('Working');
    });
    
});

module.exports = router;