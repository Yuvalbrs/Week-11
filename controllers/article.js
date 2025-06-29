const articleService = require('../services/article');

const createArticle = async (req, res) => {
  try {
    const article = await articleService.createArticle(req.body.title, req.body.published);
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create article' });
  }
};

const getArticles = async (req, res) => {
  try {
    const articles = await articleService.getArticles();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get articles' });
  }
};

const getArticle = async (req, res) => {
  try {
    const article = await articleService.getArticleById(req.params.id);
    if (!article) {
      return res.status(404).json({ errors: ['Article not found'] });
    }
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get article' });
  }
};

const updateArticle = async (req, res) => {
  try {
    const article = await articleService.updateArticle(req.params.id, req.body.title);
    if (!article) {
      return res.status(404).json({ errors: ['Article not found'] });
    }
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update article' });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const article = await articleService.deleteArticle(req.params.id);
    if (!article) {
      return res.status(404).json({ errors: ['Article not found'] });
    }
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete article' });
  }
};

module.exports = {
  createArticle,
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle
};
