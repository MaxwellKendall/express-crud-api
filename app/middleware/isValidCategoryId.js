const categoryRepository = require("../database/repositories/categoryRepository");

const isValidCategoryId = async (categoryId, res) => {
    const category = await categoryRepository.getCategory(categoryId);
    if (!category) {
        return res.status(404).json({ error: 'Category not found' });
    }
}

module.exports = isValidCategoryId;