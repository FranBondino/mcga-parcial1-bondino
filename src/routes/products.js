const express = require('express'); 

const ctrlProducts = require('../controllers/products'); 

const router = express.Router(); 

router.get('/',ctrlProducts.getProducts) 

router.get('/id/:id',ctrlProducts.getProductsById) 

router.get('/nombre/:name',ctrlProducts.getProductsByName)

router.post('/',ctrlProducts.addProduct) 

router.delete('/:id',ctrlProducts.deleteProductById) 

router.patch('/:id', ctrlProducts.updateProductById); 

module.exports = router 