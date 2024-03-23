const ProductModel = require("../../models/productModel");

const createProduct = async (
  name,
  description,
  price,
  quantityInStock,
  image,
  categoryId
) => {
  /* WRITE YOUR CODE HERE */
};

const editProduct = async (productId, newData) => {
  /* WRITE YOUR CODE HERE */
};

const deleteProduct = async (productId) => {
  /* WRITE YOUR CODE HERE */
};

const getProduct = async (productId) => {
  /* WRITE YOUR CODE HERE */
};

const getAllProducts = async () => {
  /* WRITE YOUR CODE HERE */
};


module.exports = {
  createProduct,
  editProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
};
