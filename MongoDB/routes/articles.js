var express = require('express');
var router = express.Router();
var Article = require('../models/article');

/**
 * router.get('/',(req,res)=>{
    const newArticle = new Article({
        title: 'Article Title',
        content: 'Hello there',
        date: new Date(),
        authors: ['Vlad','Another Vlad'],
        hero: 'https://cdn.igromania.ru/mnt/authors/f/e/c/8/982/preview/1d8b63ba89d7e367_1200xH.jpg',
    });
    newArticle.save(()=>{
        res.send('Working');
    });
    
});
 */

router.get('/',async(req,res)=>{
    const articles = await Article.find();
    res.render('articles/list',{articles});
})

//Render article Creation form view
router.get('/create',(req,res)=>res.render('articles/create'));

router.get('/:id/delete', async(req,res)=>{
    const id = req.params.id;
    await Article.findByIdAndDelete(id);
    res.redirect('/articles');
});

// Hand;e creation of article
router.post('/create', async(req,res)=>{
    const body = req.body;

    //Create a new Article based on submission
    const newArticle = new Article(body);

    //Save the new article
    const article = await newArticle.save();

    //Redirect to the newly created Article
    res.redirect(`/articles/${article._id}`);
});
 
router.post('/:id/update', async(req,res)=>{
    const id = req.params.id;
    const body = req.body;

    //Create a new Article based on submission
    const newArticle = Article.findByIdAndUpdate(id, body);

    //Redirect to the newly created Article
    res.redirect(`/articles/${article._id}`);
});

router.get('/:id',async(req,res) => {
    const id = req.params.id;

    const article = await Article.findById(id);

    res.render('articles/details',{article});
});


module.exports = router;