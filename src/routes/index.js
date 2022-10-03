const express = require('express'); 

const productos = require('./products') 

const router = express.Router(); 

const ping = require('./ping') 

router.use('/productos', productos); 

module.exports = router