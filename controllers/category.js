const categoryService = require('../services/category');

const createCategory = async (req, res) => {
  try {
    const category = await categoryService.createCategory(req.body.name);
    res.json(category);
  } catch (err) {
    console.error('CREATE ERROR:', err);
    res.status(500).json({ error: 'Failed to create category' });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get categories' });
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get category' });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await categoryService.updateCategory(req.params.id, req.body.name);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update category' });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await categoryService.deleteCategory(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete category' });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
};
