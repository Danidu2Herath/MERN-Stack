const express = require('express');
const { routes } = require('../app');
const router = express.Router();


const {
	getProducts,
	newProduct,
	getSingleProduct,
	updateProduct,
	deleteProduct

} = require('../controllers/productController');

router.route('/products').get(getProducts);
router.route('/product/:productId').get(getSingleProduct);

router.route('/admin/product/new').post(newProduct);
router.route('/admin/product/:productId')
	.put(updateProduct)
	.delete(deleteProduct);

module.exports = router;