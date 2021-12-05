const Product = require('../models/product');

// Create new product  => /api/v1/product/new
exports.newProduct = async (req, res, next) => {
	const product = await Product.create(req.body)

	res.status(201).json({
		success: true,
		product
	})
}

// Get All products  => /api/v1/products
exports.getProducts = async (req, res, next) => {

	const products = await Product.find();

	res.status(200).json({
		success: true,
		count: products.length,
		products
	})
}

// get Single product details => /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {

<<<<<<< HEAD
	const product = await Product.findById(req.params.productId);
=======
	const product = await Product.findById(req.params.id);
>>>>>>> 93a136e7cd623dcde627f060fdb618f7dad9c901

	if(!product) {
		return res.status(404).json({
			success: false,
			message: 'Product not found'
		})
	}

	res.status(200).json({
		success: true,
		product
	})
}