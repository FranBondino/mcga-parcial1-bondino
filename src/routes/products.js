const express = require('express'); 

const ctrlProducts = require('../controllers/products'); 

const router = express.Router(); 

router.get('/',ctrlProducts.getAllProducts) 

router.get('/id/:id',ctrlProducts.getProductById) 

router.get('/nombre/:name',ctrlProducts.getProductByName)

router.post('/',ctrlProducts.addProduct) 

router.delete('/:id',ctrlProducts.deleteProductById) 

router.patch('/:id', ctrlProducts.updateProductById); 

module.exports = router 