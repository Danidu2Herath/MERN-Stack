const express = require('express');
const { routes } = require('../app');
const router = express.Router();


const { getProducts, newProduct, getSingleProduct } = require('../controllers/productController');

router.route('/products').get(getProducts);
<<<<<<< HEAD
router.route('/product/:productId').get(getSingleProduct);
=======
router.route('/product/:id').get(getSingleProduct);
>>>>>>> 93a136e7cd623dcde627f060fdb618f7dad9c901
router.route('/product/new').post(newProduct);

module.exports = router;