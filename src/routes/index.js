const express = require('express'); 

const productos = require('./products') 

const router = express.Router(); 

router.use('/productos', productos); 

module.exports = router