const productRepository = require("..//database/repositories/productRepository");
const expressAsyncHandler = require("express-async-handler");

const createProduct = expressAsyncHandler(async (req, res) => {
  /* WRITE YOUR CODE HERE */
});

const editProduct = expressAsyncHandler(async (req, res) => {
  /* WRITE YOUR CODE HERE */
});

const deleteProduct = expressAsyncHandler(async (req, res) => {
  /* WRITE YOUR CODE HERE */
});

const getProduct = expressAsyncHandler(async (req, res) => {
  /* WRITE YOUR CODE HERE */
});

const getAllProducts = expressAsyncHandler(async (req, res) => {
  /* WRITE YOUR CODE HERE */
});

module.exports = {
  createProduct,
  editProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
};
