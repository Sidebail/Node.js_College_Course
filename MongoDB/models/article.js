const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    content: String,
    date: Date,
    authors: [String],
    hero: String,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;